

"use client";

import * as React from "react";
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'


export function LightDarkSwitch() {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	const currentTheme = theme === "system" ? systemTheme : theme;

  
  return (
    <div className="">
      
      <div className="">
        {currentTheme === "dark" ? (
				<SunIcon
					className="h-6 w-6 cursor-pointer text-yellow-500 hover:scale-125 transition duration-300"
					onClick={() => setTheme("light")}
				/>
			) : (
				<MoonIcon
					className="h-5 w-5 cursor-pointer text-slate-600 hover:scale-125 transition duration-300"
					onClick={() => setTheme("dark")}
				/>
			)}  
      </div>
    </div>
  )
}

