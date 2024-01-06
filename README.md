# Varjo OVR Res Fix
This is a tiny NodeJS script which fixes the 27PPD max render res in SteamVR for Varjo Gen3 Hardware (Aero, VR-3, XR-3) users.  
What it does is fool SteamVR into thinking the user opened up the SteamVR Web Console and issued a command to overwrite the "maxRecommendedResolution" setting, which is what forces a render res of 27PPD.

Unfortunatly this fix has to be applied for every time SteamVR is restarted, as the offending setting is reset by the Varjo plugin during every start of SteamVR.

## Prerequesists
You need to have a recent version of NodeJS installed on your machine for this script to work.

## Run
Before running this script for the first time you need to install it's dependencies `ws` and `axios` by running:
```
npm i
```

After that you're all set, you can use either of these commands inside the project folder to run the script:
```
npm start
```
```
node index.js
```

## Combine with Varjo Optical Adjustment Tool
This script can be combined with Varjo's Optical Adjustment tool, so that when you run that tool, it also fixes the SteamVR render res. To do that just follow these steps:
1. Inside the Optical Adjustment folder create a new folder called `ovr_res_fix`
2. Extract the project files into this new folder
3. Install dependencies as mentioned [in the Run section](#run)
4. Add the following lines at the end of the `EnableOpticalAdjustment.bat` script, which came with the Optical Adjustment tool:
```
cd ovr_res_fix
npm start
```
