# Getting Started with Chessable Interview

Display a chessboard with a default FEN of: 8/2p5/8/8/8/8/8/8 w KQkq - 0 1  
-Include a button that adds a white pawn to a random legal position on the board.  
-Allow that pawn to make legal moves across the board.  
-Do not use any 3rd-party chess libraries.  
-Return your code in an online executable sandbox, such as https://codesandbox.io/  
-Please complete this within the next 7 days (do let me know if personal circumstances don't permit). Also make sure you give an indication of how much time you spent on the solution.  


- - -
# Development Status

 - I decide to just give all the power to Square and movementHelpers due to posibility to expand another pieces.
 - Non tested components, are pretty simple about the props I prefer to test them with Storybook but I don't want to add another big library.
 - There's a lot to improve but I think it's pretty simple to find the flow of the code.
    - It starts in AppContext.tsx and `move` action with `movementToFEN`.