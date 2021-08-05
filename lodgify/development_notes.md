# Notes
- Tried to go very simply in the state management. I didn't wanna approach contexts because we didn't need it in any part of the website.
- The components will manage the it's own state to prevent the crazy dom update of 300 elements.
- useReducer to prepare the app if is need to manage the API request.
- Because one of the rules was Keep it Simple I didn't add Cypress to interact with the results but for me at least was going to be mandatory thing in any application.
- Using Snapchots only on the possibles components will change a lot. To know the possibles changes you made.
- Not using the feature Themes of Styled components, you know same rule: Keep it Simple.
- Due the lack of domain I put the types on core but it can be approached better when the app is bigger.