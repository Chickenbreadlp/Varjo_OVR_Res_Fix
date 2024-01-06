### *The underlying issue was thought to be a result of misbehaviour of the Varjo driver, when it was actually caused by a misbehaving WMR driver!*
If you have an issue with your render resolution stuck at 27PPD (or 3240 on either dimension of the render resolution), follow these steps instead:
1. Open the folder into which you have installed the WMR SteamVR driver (ex. `C:\Program Files (x86)\Steam\steamapps\common\MixedRealityVRDriver`)
2. Navigate to the `bin\win64` folder
3. Open `OpenVRSettingsUX.exe`
4. Toggle the setting `Allow resolutions higher then recommended`

This will disable the WMR driver from forcing the render resolution down to 3240 on every startup. If the setting was already applied, you may need to revert this setting back to its default however. For this you may follow these steps:
1. Open the fonder into which you have Steam installed (ex. `C:\Program Files (x86)\Steam`)
2. Navigate to the `config` folder
3. Open `steamvr.vrsettings` in a text editor
4. Locate the line that says `"maxRecommendedResolution": 3240` and remove it

Once this is done, the Problem should be fixed permanently.  
The original Readme will be left here for completeness sake:

# Varjo OVR Res Fix
This is a tiny NodeJS script which fixes the 27PPD max render res in SteamVR for Varjo Gen3 Hardware (Aero, VR-3, XR-3) users.  
What it does is fool SteamVR into thinking the user opened up the SteamVR Web Console and issued a command to overwrite the "maxRecommendedResolution" setting, which is what forces a render res of 27PPD.

Unfortunatly this fix has to be applied for every time SteamVR is restarted, as the offending setting is reset by the Varjo plugin during every start of SteamVR.

## Prerequesists
You need to have a recent version of [NodeJS](https://nodejs.org/en/download) installed on your machine for this script to work.

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
