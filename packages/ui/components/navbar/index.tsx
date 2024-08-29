"use client";

import Image from "next/image";
import { auth } from "../../../../apps/web/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/shadcn/dropdown-menu";
import { Icon, LogOut, UserRound } from "lucide-react";
import UserImage from "@repo/ui/components/UserImage";
import { Session } from "next-auth";
import { cn } from "../../lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { logOutUser } from "../../../../apps/web/src/actions/user";
import { toast } from "../../shadcn/use-toast";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "../../shadcn/button";
import { Icons } from "../Icons";
import { useTheme } from "next-themes";
import MaxWidthWrapper from "../MaxWidthWrapper";

type NavbarProps = {
  session: Session | null;
};

const Navbar = ({ session }: NavbarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Jobs",
      route: "/jobs",
    },
    {
      name: "Contact Us",
      route: "/contact-us",
    },
  ];

  const dropDownData = [
    {
      name: "Profile",
      icon: <UserRound size={15} />,
      href: "/profile",
    },
  ];

  const handleSignOut = async () => {
    const response = await logOutUser();

    if (response?.status !== "success") {
      toast({
        variant: "destructive",
        title: response?.message,
      });
      return;
    }

    router.push("/");
    router.refresh();
  };

  const userRole = session?.user.role;

  return (
    <MaxWidthWrapper>
      <nav
        className={`w-full border  rounded-full flex items-center justify-between h-14 shadow-[0 0 10px hsl(var(--blue) / 1)] border-secondary px-2 transition-all backdrop-blur-lg bg-background`}
      >
        <div className="flex justify-center items-center gap-10 ml-4">
          <h3 className="animate-text-gradient text-xl font-bold inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-400 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-600 dark:to-neutral-400">
            BidforWork
          </h3>
        </div>

        <div className=" flex p-2 px-4 text-sm justify-center w-fit items-center gap-5 text-gray-500 font-semibold tracking-tighter">
          {navItems.map((item) => {
            return (
              <Link key={item.name} href={item.route}>
                <p
                  className={cn("cursor-pointer", {
                    "text-foreground": pathName === item.route,
                    "hover:text-foreground hover:underline":
                      pathName != item.route,
                  })}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
          {userRole === "ADMIN" ? (
            <Link href="/jobs/manage">
              <p
                className={cn(
                  "cursor-pointer hover:text-foreground hover:underline",
                  {
                    "text-foreground": pathName === "/jobs/manage",
                  }
                )}
              >
                Manage
              </p>
            </Link>
          ) : null}
        </div>

        <div className="flex justify-center items-center mr-8">
          {session && session?.user && (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[2rem] flex items-center p-[0.2rem]  justify-center h-[2rem]">
                {!session?.user.image ? (
                  <div className="p-1 border-2 rounded-md">
                    <UserRound />
                  </div>
                ) : (
                  <UserImage image={session?.user.image} />
                )}
              </DropdownMenuTrigger>

              <DropdownMenuContent className="!w-[15rem] dark:shadow-[#030712] translate-y-8 scale-110 -translate-x-10 shadow-lg bg-white">
                <DropdownMenuLabel className="flex gap-4 items-center">
                  <div className="!w-[2rem] flex items-center p-[0.2rem]  justify-center !h-[2rem]">
                    {!session?.user.image ? (
                      <div className="p-1 border-2 rounded-full border-[#1a1a1a]">
                        <UserRound />
                      </div>
                    ) : (
                      <UserImage image={session?.user.image} />
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="max-w-[200px]">{session?.user?.name}</span>
                    <span className="text-[0.8rem] max-w-[200px] text-gray-400">
                      {session?.user?.email}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {dropDownData.map((item, index) => {
                  return (
                    <DropdownMenuItem
                      className="flex gap-2 focus:border-gray-500 cursor-pointer"
                      onClick={() => router.push("/profile")}
                      key={index}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator />
                {session?.user && (
                  <DropdownMenuItem
                    onClick={async () => {
                      await signOut();
                      router.push("/");
                    }}
                    className="flex gap-2 cursor-pointer"
                  >
                    <LogOut size={15} />
                    Logout
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {!session && (
            <Link href="/login">
              <Button size={"sm"} className="mr-2 font-medium">
                Join Now
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
