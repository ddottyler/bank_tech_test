# Bank Tech Test

### Project overview
This is a practice tech test taking place on week 10 of the Makers course. 
The aim is to practice OO design and TDD skills within the framework of a tech test that an employer might send you when applying for a role. 

**Project specs**

This tech test will aim to replicate personal banking functions with the following requirements:
- Be able to interact with code via a REPL
- Be able to deposit/withdraw
- Be able to request an account statement (date, amount, balance) printing.
- Be able to store data in memory (without requiring a database)

**Project approach** 
I first identified the core classes that would be needed and the variables/methods within each of those by domain modelling the challenge. As the project developed, it became clear that additional methods (especially around depositing and withdrawing) would be necessary to streamling each method and to ensure that SRP was being followed. I felt that having `balance` as a separate class made sense as it had it's own responsibilities but needed to be easily accessed and read using the main `bankAccount` class. 

**How to run the project** 

This project has been designed to be interacted with via the JavaScript console. One way to interact with the code is therefore to type `open SpecRunner.html` into the command line when in the root of the project repo. This should open your default browser. If google, you can then hold _option_, _command_, _i_ to open the console within developer tools. This will give you full access to interact with the code. 

**How to run the tests** 

This project is written in JavaScript and uses Jasmine as it's testing framework. Similarly to the above, to run and check the tests within this project, type `open SpecRunner.html` into the command line when in the root of the project repo.

This project uses Karma for test coverage and this can be started by typing `karma start` into the terminal when in the root of the repo. Alternatively, and for better visibility on coverage, navigate to coverage/html and `open index.html`. This should launch a page on your default browser with a breakdown of what is being tested and what the coverage looks like. 

**How to run linter** 

This project uses eslint as it's linter. To run this, use `eslint src/**` and `eslint spec/**`.