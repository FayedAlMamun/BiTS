"use client";
import React from "react";

export const ColorConfiguration: React.FC = () => {
  return (
    <>
      <h3 className="text-black text-xl font-semibold mt-8 dark:text-white">
        Colors
      </h3>

      <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-grey">
          <span className="font-semibold text-lg dark:text-white">
            1. Override Colors
          </span>{" "}
          <br />
          For any change in colors : src/utils/extendedConfig.ts
        </p>

        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>dark_black: &quot;#1B1D1E&quot;,</span>
            <span>purple_blue: &quot;#4928FD&quot;,</span>
            <span>purple: &quot;#BA81EE&quot;,</span>
            <span>blue: &quot;#70B5FF&quot;,</span>
            <span>orange: &quot;#FFAF68&quot;,</span>
            <span>green: &quot;#79D45E&quot;,</span>
            <span>pink: &quot;#F4889A&quot;,</span>
            <span>blue_gradient: &quot;#D9F3FC&quot;,</span>
            <span>yellow_gradient: &quot;#FDF1D3&quot;,</span>
            <span>paleYellow: &quot;#F6E683&quot;,</span>
            <span>dark_yellow_gradient: &quot;#443f32&quot;,</span>
            <span>dark_blue_gradient: &quot;#303d42&quot;</span>
          </p>
        </div>
      </div>

      <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
        <p className="text-base font-medium text-midnight_text dark:text-grey">
          <span className="font-semibold text-lg dark:text-white">
            2. Override Theme Colors
          </span>{" "}
          <br />
          For change, go to : src/utils/extendedConfig.ts
        </p>

        <div className="py-4 px-5 rounded-md bg-black mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>dark_black: &quot;#1B1D1E&quot;,</span>
            <span>purple_blue: &quot;#4928FD&quot;</span>
          </p>
        </div>
      </div>
    </>
  );
};
