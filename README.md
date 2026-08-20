

https://github.com/user-attachments/assets/c086ce84-8844-4392-a21f-2685b61ceedd



https://github.com/user-attachments/assets/b446785f-1726-4216-9877-8c32bd288f23



# StreamShelf

**NOTE*** *I have enabled the new react Arch for this project and also I am leveraging react new compiler. With this I do not need the regular memoization hooks. Hence you will observe there are no `useMemo`'s `useCallback`'s and all of that. Just wanted to highlight on this* 

## Functionalities
- Focus Manager 
- Built a swimlane list of 3 different contents ( Home screen in a nutshell )
- Implemented by pulling live data from [here](https://developer.themoviedb.org/docs/daily-id-exports)
    - A quick note on this, this api requires an access token and these tokens unfortunately expires in couple of hours once they are generated
    - Once these tokens expire the list will be ultimately empty. Now we need to generate a fresh one. We can either create an account with the link I attached or whenever you are about to try this out I can grab you one from my account quickly
        - You can easily replace this token within this path `src/shared/carousel/constants/constant.ts`
        - It's not a `.env` for this project its a variable called `CONTENT_ACCESS_TOKEN` - ( the long jwt token! )
    - Built a quick Loading, Error and empty list container
    - Accounted for Errors, loading, as well as Network disruptions etc
    - I implemented the Details screen as well ( In my case I called it the CommonInfo )
    - I got navigations working - Navigating when from clicking a content card to displaying the CommonInfo component
    - Ensured every single component and variables are strongly typed
    - Also the project uses NativeWind - ( So no native react styling Yaaay )
    - ***Another important point*** - Contents from Favorite TV Show do not come back with Titles hence it has none for the most part
    - I can also show during demo how I will approach handling `MyList`


## Steps to build this project
* Ensure you have you environments all set up
    * node version ``` >= 20 ``` should suffice
    * Ensure you have yoru android env especially set up correctly. I am running on Zulu Java env as recommended by react to set up android 
    * Ensure to run a simple `./gradlew clean` - by navigating into the android folder `cd android` from the root of your project
    * Remove any existing `node_modules` ( `rm -f node_modules` ) then re-install using the `yarn` command
    * I ran this project on AndroidTV Emulator. You can use the emulator or a physical device leveraging `adb` command
    * After running `yarn install` pls also run `npx pod-install` - can run from root with cd'n into the `ios` dir  or `cd ios && pod install` ( just to ensure we carry tvOS or iOS along )
