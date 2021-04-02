This project is an implemetation of REDUX. 

The concept of redux is simplier when it is sperated in small pieces. While learning it, I found it easier to create specific folders for each:
1. Actions, 
2. Reducers, 
3. Wrapper (also alphabetically to understan the order they execute) to include the 'combineReducers' component (since I have two different reducers (isLogged.js and points.js)) and also the store created to include the global components and making sure it is used all over the application by the << Provider >> component in index.js file. 

I try to imagine REDUX as a hierarchical scheme. On the top of the scheme is the 'store' componenet, making sure the global component is created and exported, so the developer can implement it in differnt files. Then the 'rootReducer', which holds the reducers created and makes sure to be included in the store because the rootReducer holds the component which store will get them available for use in different files of application. Then are the 'reducers', which are created by 'actions', while actions being the next step of creation. 'useDispatch' and 'useSelector' are the linking componentes that make the actions executable in one certain file and exporting the global state component in the file where we want to change it. Also, everything is spread by the 'Provider' component while creating the navigation of the file. 

                                            1.Store         << Provider >>
                                        [   2.rootReducer
                                            3.reducers  ]   << useSelector >>
                                            4.Actions       << useDispatch >>

--> EVERY TIME THE USER REFRESHES THE PAGE, THE STATE GOES BACK TO THE DEFAULT STATE! <--

--> I have also checked the << Immer >> library for deeply-nested object updates, where you can write the mutable code and Immer will take that code and produce a perfect immutable update. 
To provide it:
<< yarn add immer >>  and << import produce from 'immer'; >>

--> About the aplication created:

To begin with to show how the state of application changes and when does it change, I have created this simple implemetation to understand the fundamentals of Redux. It starts by logging in and changing the default state of logging in from false to true. Since it returns true, we can navigate to Points.js file.
Usullay it is better to use a 'Log in' action with a condition (such as username or password). Since it wasn't the main focus of the demo, the implemetation was to see how the state changes. 

Then, after we navigate to << /points >> it is required to input the user's name and showing it in the screen.The remove and add buttons, execute a specific function that returns and shows in the screen the value we get after clicking them. The default state of both of them is << state = 0 >>. While clicking add/remove the state changes its' value to the number returned by the functions behind them. I suggest enabling the 'redux-dev-tools' in the browser for a better understanding. 

--> FOR MORE --> I would suggest reading the comments through the files to have a better visualisation. (I have also added CSS (my favourite))