import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Resume", href: "https://github.com/script-2000/resume/blob/caeee203328225f10e3890e7e2fca28c67ef25f3/RESUMEUPDATE.pdf", current: false },
  ]);
  const [darkmood, setDarkmood] = useState<boolean>(() => {
    return Cookies.get("darkmode") === "true";
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mode",
      darkmood ? "dark" : "light"
    );
  }, [darkmood]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500); // match the duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  function setcurrent(nextIndex: number) {
    const newNavigation = navigation.map((item, index) => ({
      ...item,
      current: index === nextIndex,
    }));
    setNavigation(newNavigation);
  }

  function changemood() {
    setAnimate(true);
    if (darkmood) {
      Cookies.set("darkmode", "false");
      setDarkmood(false);
    } else {
      Cookies.set("darkmode", "true");
      setDarkmood(true);
    }
  }

  return (
    <Disclosure as="nav" >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset ">
              <span className="sr-only">Open main menu.</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <h2 className="font-semibold text-xl">
               
              </h2>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white "
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 font-medium"
                    )}
                    onClick={() => setcurrent(index)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative rounded-full p-1 border-2 border-gray-600 cursor-pointer">
              <span className="sr-only">Change Theme</span>
              {darkmood ? (
                <SunIcon
                  className={classNames("h-6 w-6", animate && "animate-flip")}
                  onClick={changemood}
                />
              ) : (
                <MoonIcon
                  className={classNames("h-6 w-6", animate && "animate-flip")}
                  onClick={changemood}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-gray-800 text-white">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
