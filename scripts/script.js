// Question class
class Question {
  constructor(question, optionA, optionB, optionC, optionD, answer) {
    this.question = question;
    this.options = { A: optionA, B: optionB, C: optionC, D: optionD };
    this.answer = answer;
  }

  isCorrect(choice) {
    return choice === this.answer;
  }

  displayQuestion() {
    return `Q: ${this.question}\nA) ${this.options.A}\nB) ${this.options.B}\nC) ${this.options.C}\nD) ${this.options.D}`;
  }
}

// Player class
class Player {
  constructor(name, choice, score) {
    this.name = name;
    this.choice = choice;
    this.score = score;
  }
}
const javaQuestions = [
  new Question(
    "Which keyword is used to define a class in Java?",
    "class",
    "Class",
    "define",
    "struct",
    "A"
  ),
  new Question(
    "Which data type is used to store decimal numbers in Java?",
    "float",
    "double",
    "decimal",
    "real",
    "B"
  ),
  new Question(
    "Which keyword is used to create an object in Java?",
    "new",
    "create",
    "instance",
    "make",
    "A"
  ),
  new Question(
    "Which method is called when an object is created?",
    "finalize()",
    "init()",
    "constructor",
    "new()",
    "C"
  ),
  new Question(
    "Which access modifier makes a member accessible only within the same class?",
    "private",
    "protected",
    "default",
    "public",
    "A"
  ),
  new Question(
    "Which operator is used to compare two values in Java?",
    "=",
    "==",
    "!=",
    "===",
    "B"
  ),
  new Question(
    "What is the size of an int in Java?",
    "16-bit",
    "32-bit",
    "64-bit",
    "8-bit",
    "B"
  ),
  new Question(
    "Which keyword is used to inherit a class in Java?",
    "extends",
    "implements",
    "inherits",
    "super",
    "A"
  ),
  new Question(
    "Which of these is NOT a Java primitive type?",
    "int",
    "float",
    "boolean",
    "string",
    "D"
  ),
  new Question(
    "What is the default value of a boolean variable in Java?",
    "true",
    "false",
    "null",
    "0",
    "B"
  ),
  new Question(
    "Which of the following is used to handle exceptions in Java?",
    "catch",
    "try-catch",
    "throw",
    "error",
    "B"
  ),
  new Question(
    "Which keyword is used to define a constant in Java?",
    "final",
    "const",
    "static",
    "var",
    "A"
  ),
  new Question(
    "What is the superclass of all classes in Java?",
    "Object",
    "Main",
    "BaseClass",
    "SuperClass",
    "A"
  ),
  new Question(
    "Which of the following is NOT a Java access modifier?",
    "private",
    "protected",
    "internal",
    "public",
    "C"
  ),
  new Question(
    "Which Java feature allows multiple methods with the same name but different parameters?",
    "Overloading",
    "Overriding",
    "Polymorphism",
    "Encapsulation",
    "A"
  ),
  new Question(
    "What is used to read input from the user in Java?",
    "Scanner",
    "BufferedReader",
    "InputStream",
    "Reader",
    "A"
  ),
  new Question(
    "Which Java collection stores key-value pairs?",
    "List",
    "Set",
    "Map",
    "Array",
    "C"
  ),
  new Question(
    "Which package is automatically imported in every Java program?",
    "java.util",
    "java.io",
    "java.lang",
    "java.net",
    "C"
  ),
  new Question(
    "Which loop is best suited when the number of iterations is known?",
    "while",
    "do-while",
    "for",
    "switch",
    "C"
  ),
  new Question(
    "Which keyword is used to prevent method overriding?",
    "static",
    "final",
    "protected",
    "private",
    "B"
  ),
];

const cppQuestions = [
  new Question(
    "What is C++ primarily known as?",
    "A scripting language",
    "A markup language",
    "An object-oriented language",
    "A database language",
    "C"
  ),
  new Question(
    "Which of the following is NOT a C++ keyword?",
    "volatile",
    "mutable",
    "string",
    "explicit",
    "C"
  ),
  new Question(
    "Which operator is used for dynamic memory allocation in C++?",
    "malloc",
    "alloc",
    "new",
    "create",
    "C"
  ),
  new Question(
    "Which header file is needed for input and output operations in C++?",
    "<stdio.h>",
    "<iostream>",
    "<stdlib.h>",
    "<string.h>",
    "B"
  ),
  new Question(
    "What is the default return type of the `main()` function in C++?",
    "void",
    "int",
    "char",
    "double",
    "B"
  ),
  new Question(
    "Which symbol is used to declare a pointer in C++?",
    "&",
    "*",
    "->",
    "%",
    "B"
  ),
  new Question(
    "Which keyword is used to prevent a function from being overridden?",
    "protected",
    "final",
    "static",
    "virtual",
    "B"
  ),
  new Question(
    "Which feature allows multiple functions to have the same name but different parameters?",
    "Encapsulation",
    "Polymorphism",
    "Function Overloading",
    "Function Overriding",
    "C"
  ),
  new Question(
    "What does `cout` do in C++?",
    "Takes input from the user",
    "Outputs data to the console",
    "Declares a variable",
    "Defines a function",
    "B"
  ),
  new Question(
    "Which loop structure is best when the number of iterations is unknown?",
    "for",
    "while",
    "do-while",
    "switch",
    "B"
  ),
  new Question(
    "Which operator is used to access members of a structure using a pointer?",
    ".",
    "->",
    "::",
    "&",
    "B"
  ),
  new Question(
    "Which C++ feature allows defining multiple functions with the same name but different arguments?",
    "Function overriding",
    "Function overloading",
    "Recursion",
    "Encapsulation",
    "B"
  ),
  new Question(
    "Which keyword is used to define a class in C++?",
    "struct",
    "class",
    "object",
    "define",
    "B"
  ),
  new Question(
    "What is the size of `int` in most C++ compilers?",
    "2 bytes",
    "4 bytes",
    "8 bytes",
    "Depends on system",
    "D"
  ),
  new Question(
    "What is the correct syntax for defining a namespace in C++?",
    "namespace std;",
    "namespace = std;",
    "using std;",
    "namespace: std;",
    "A"
  ),
  new Question(
    "Which operator is used to deallocate memory allocated by `new`?",
    "delete",
    "free",
    "remove",
    "dispose",
    "A"
  ),
  new Question(
    "What is the purpose of a destructor in C++?",
    "To initialize objects",
    "To free allocated memory",
    "To create a new instance",
    "To access private members",
    "B"
  ),
  new Question(
    "What is an abstract class in C++?",
    "A class with only private members",
    "A class that cannot be instantiated",
    "A class with only static methods",
    "A class with all virtual methods",
    "B"
  ),
  new Question(
    "Which keyword is used to inherit from a base class in C++?",
    "inherits",
    "super",
    "extends",
    "public",
    "D"
  ),
  new Question(
    "Which of these is NOT a valid access specifier in C++?",
    "private",
    "protected",
    "internal",
    "public",
    "C"
  ),
];

const pythonQuestions = [
  new Question(
    "What is the correct file extension for Python files?",
    ".py",
    ".python",
    ".pt",
    ".pyt",
    "A"
  ),
  new Question(
    "Which keyword is used to define a function in Python?",
    "func",
    "define",
    "def",
    "function",
    "C"
  ),
  new Question(
    "What is the output of `print(2 ** 3)` in Python?",
    "5",
    "6",
    "8",
    "9",
    "C"
  ),
  new Question(
    "Which of the following is a mutable data type in Python?",
    "tuple",
    "list",
    "string",
    "int",
    "B"
  ),
  new Question(
    "How do you start a comment in Python?",
    "//",
    "#",
    "/*",
    "--",
    "B"
  ),
  new Question(
    "Which function is used to read input from the user in Python?",
    "get()",
    "input()",
    "read()",
    "scanf()",
    "B"
  ),
  new Question(
    "Which of the following is NOT a valid Python variable name?",
    "_my_var",
    "2myVar",
    "myVar",
    "my_var",
    "B"
  ),
  new Question(
    "Which of these is used to exit a loop in Python?",
    "exit",
    "stop",
    "break",
    "terminate",
    "C"
  ),
  new Question(
    "What will `print(type(3.14))` output?",
    "int",
    "float",
    "double",
    "string",
    "B"
  ),
  new Question(
    "Which keyword is used to define a class in Python?",
    "class",
    "define",
    "object",
    "struct",
    "A"
  ),
  new Question(
    "Which of these data types is immutable in Python?",
    "list",
    "set",
    "tuple",
    "dictionary",
    "C"
  ),
  new Question(
    "How do you create an empty dictionary in Python?",
    "dict = {}",
    "dict = []",
    "dict = ()",
    "dict = ''",
    "A"
  ),
  new Question(
    "Which module is used for working with random numbers in Python?",
    "random",
    "rand",
    "math",
    "numpy",
    "A"
  ),
  new Question(
    "Which function is used to find the length of a string in Python?",
    "length()",
    "size()",
    "len()",
    "count()",
    "C"
  ),
  new Question(
    "Which of these is NOT a Python boolean value?",
    "True",
    "False",
    "None",
    "None of the above",
    "C"
  ),
  new Question(
    "How do you check if a key exists in a dictionary?",
    "dict.hasKey()",
    "key in dict",
    "dict.findKey()",
    "key exists dict",
    "B"
  ),
  new Question(
    "What will `bool('False')` return in Python?",
    "True",
    "False",
    "None",
    "Error",
    "A"
  ),
  new Question(
    "What is the purpose of `pass` in Python?",
    "To exit the program",
    "To define an empty block of code",
    "To return a value",
    "To skip an iteration",
    "B"
  ),
  new Question(
    "Which of these is used to handle exceptions in Python?",
    "catch",
    "try-except",
    "handle",
    "error-trap",
    "B"
  ),
  new Question(
    "What does `__init__` represent in a Python class?",
    "A destructor method",
    "A constructor method",
    "A private method",
    "An initialization variable",
    "B"
  ),
];

const cQuestions = [
  new Question(
    "Which function is used to print output in C?",
    "print()",
    "printf()",
    "cout <<",
    "display()",
    "B"
  ),
  new Question(
    "Which header file is required for input and output functions in C?",
    "<stdlib.h>",
    "<stdio.h>",
    "<iostream>",
    "<conio.h>",
    "B"
  ),
  new Question(
    "What is the default return type of the `main()` function in C?",
    "void",
    "int",
    "char",
    "double",
    "B"
  ),
  new Question(
    "Which operator is used to get the address of a variable?",
    "&",
    "*",
    "#",
    "@",
    "A"
  ),
  new Question(
    "Which keyword is used to define a constant in C?",
    "const",
    "final",
    "static",
    "define",
    "A"
  ),
  new Question(
    "Which function is used to dynamically allocate memory in C?",
    "new",
    "malloc",
    "alloc",
    "calloc",
    "B"
  ),
  new Question(
    "Which of these is a correct comment syntax in C?",
    "// This is a comment",
    "/* This is a comment */",
    "# This is a comment",
    "Both A and B",
    "D"
  ),
  new Question(
    "What is the size of an `int` in most C compilers?",
    "2 bytes",
    "4 bytes",
    "8 bytes",
    "Depends on system",
    "D"
  ),
  new Question(
    "Which loop is best when the number of iterations is known?",
    "while",
    "for",
    "do-while",
    "switch",
    "B"
  ),
  new Question(
    "Which of the following is NOT a valid C data type?",
    "int",
    "double",
    "float",
    "string",
    "D"
  ),
  new Question(
    "What does `sizeof` operator return?",
    "Size of a variable",
    "Size of a datatype",
    "Size in bytes",
    "All of the above",
    "D"
  ),
  new Question(
    "What is the purpose of the `break` statement in C?",
    "Exits the loop",
    "Continues loop execution",
    "Terminates program",
    "Jumps to another function",
    "A"
  ),
  new Question(
    "What does the `do-while` loop ensure?",
    "Code runs at least once",
    "Loop never runs",
    "Loop condition checked first",
    "None of the above",
    "A"
  ),
  new Question(
    "What is the default value of an uninitialized `int` variable in C?",
    "0",
    "Garbage value",
    "null",
    "Undefined",
    "B"
  ),
  new Question(
    "Which function is used to read a string input in C?",
    "scanf()",
    "gets()",
    "cin >>",
    "input()",
    "B"
  ),
  new Question(
    "What is the function of the `continue` statement?",
    "Exits loop",
    "Skips remaining loop body and moves to next iteration",
    "Terminates program",
    "Returns value",
    "B"
  ),
  new Question(
    "Which is a valid pointer declaration in C?",
    "int ptr",
    "int *ptr",
    "ptr int",
    "pointer int",
    "B"
  ),
  new Question(
    "What does the `void` keyword specify?",
    "Function returns no value",
    "A variable type",
    "An empty value",
    "None of the above",
    "A"
  ),
  new Question(
    "Which file extension is used for C header files?",
    ".c",
    ".h",
    ".hpp",
    ".ch",
    "B"
  ),
  new Question(
    "Which operator is used to access the value at a memory address in C?",
    "*",
    "&",
    "->",
    "%",
    "A"
  ),
];

const csharpQuestions = [
  new Question(
    "Which keyword is used to declare a class in C#?",
    "class",
    "struct",
    "define",
    "object",
    "A"
  ),
  new Question(
    "Which keyword is used for exception handling in C#?",
    "catch",
    "try-catch",
    "throw",
    "handle",
    "B"
  ),
  new Question(
    "Which of the following is NOT a valid C# data type?",
    "int",
    "double",
    "char",
    "text",
    "D"
  ),
  new Question(
    "Which access modifier allows a member to be accessible only within its own class?",
    "public",
    "private",
    "protected",
    "internal",
    "B"
  ),
  new Question(
    "Which keyword is used to define an interface in C#?",
    "interface",
    "class",
    "implements",
    "abstract",
    "A"
  ),
  new Question(
    "What does `using System;` do in C#?",
    "Imports the System namespace",
    "Creates a new class",
    "Defines a function",
    "Handles memory management",
    "A"
  ),
  new Question(
    "Which of these is used to prevent method overriding in C#?",
    "static",
    "final",
    "sealed",
    "override",
    "C"
  ),
  new Question(
    "Which operator is used for NULL-coalescing in C#?",
    "??",
    "&&",
    "||",
    "==",
    "A"
  ),
  new Question(
    "Which keyword is used to define a read-only variable?",
    "const",
    "readonly",
    "static",
    "immutable",
    "B"
  ),
  new Question(
    "Which method is called when an object is garbage collected?",
    "destroy()",
    "finalize()",
    "dispose()",
    "delete()",
    "B"
  ),
  new Question(
    "Which loop is NOT present in C#?",
    "for",
    "while",
    "foreach",
    "repeat",
    "D"
  ),
  new Question(
    "What is the default value of a `string` variable in C#?",
    "null",
    "empty",
    '" "',
    "undefined",
    "A"
  ),
  new Question(
    "Which C# feature allows multiple methods with the same name but different parameters?",
    "Overloading",
    "Overriding",
    "Encapsulation",
    "Polymorphism",
    "A"
  ),
  new Question(
    "Which collection type stores key-value pairs in C#?",
    "List",
    "Dictionary",
    "Array",
    "Set",
    "B"
  ),
  new Question(
    "Which C# structure is used to handle asynchronous operations?",
    "Thread",
    "Task",
    "Coroutine",
    "Promise",
    "B"
  ),
  new Question(
    "Which keyword is used to inherit a class in C#?",
    "extends",
    "inherits",
    ":",
    "super",
    "C"
  ),
  new Question(
    "What is the default access modifier for class members?",
    "public",
    "private",
    "protected",
    "internal",
    "B"
  ),
  new Question(
    "Which of the following is NOT a valid loop in C#?",
    "for",
    "while",
    "do-while",
    "foreach",
    "D"
  ),
  new Question(
    "Which keyword is used to create an anonymous function in C#?",
    "lambda",
    "func",
    "delegate",
    "anonymous",
    "C"
  ),
  new Question(
    "Which keyword is used to define a property in C#?",
    "prop",
    "property",
    "getset",
    "get; set;",
    "D"
  ),
];

const jsQuestions = [
  new Question(
    "Which keyword is used to declare a variable in JavaScript?",
    "var",
    "let",
    "const",
    "All of the above",
    "D"
  ),
  new Question(
    "Which function is used to print output in JavaScript?",
    "printf()",
    "console.log()",
    "print()",
    "log()",
    "B"
  ),
  new Question(
    "Which symbol is used for comments in JavaScript?",
    "//",
    "/* */",
    "#",
    "--",
    "A"
  ),
  new Question(
    "Which data type is NOT supported in JavaScript?",
    "Number",
    "String",
    "Boolean",
    "Character",
    "D"
  ),
  new Question(
    "How do you write a function in JavaScript?",
    "def myFunction()",
    "function myFunction()",
    "func myFunction()",
    "define myFunction()",
    "B"
  ),
  new Question(
    "Which operator is used to check both value and type equality?",
    "==",
    "===",
    "=",
    "!=",
    "B"
  ),
  new Question(
    "Which event is triggered when a user clicks on an HTML element?",
    "onhover",
    "onclick",
    "onpress",
    "onchange",
    "B"
  ),
  new Question(
    "What is the result of `typeof null` in JavaScript?",
    "null",
    "object",
    "undefined",
    "string",
    "B"
  ),
  new Question(
    "Which function is used to convert a string to an integer?",
    "parseInt()",
    "toInteger()",
    "int()",
    "Number.parse()",
    "A"
  ),
  new Question(
    "What does `NaN` stand for in JavaScript?",
    "Not a Name",
    "Not a Number",
    "Null and None",
    "Negative and Null",
    "B"
  ),
  new Question(
    "Which statement is used to stop a loop in JavaScript?",
    "break",
    "continue",
    "exit",
    "stop",
    "A"
  ),
  new Question(
    "Which function is used to execute a function after a delay?",
    "setTimeout()",
    "setInterval()",
    "wait()",
    "delay()",
    "A"
  ),
  new Question(
    "Which JavaScript framework is developed by Facebook?",
    "Angular",
    "Vue.js",
    "React",
    "Ember.js",
    "C"
  ),
  new Question(
    "Which keyword is used to declare an asynchronous function?",
    "async",
    "await",
    "defer",
    "promise",
    "A"
  ),
  new Question(
    "Which function is used to merge two arrays?",
    "concat()",
    "merge()",
    "append()",
    "combine()",
    "A"
  ),
  new Question(
    "Which function is used to remove the last element from an array?",
    "pop()",
    "shift()",
    "splice()",
    "removeLast()",
    "A"
  ),
  new Question(
    "Which keyword is used to declare a constant variable?",
    "const",
    "let",
    "var",
    "constant",
    "A"
  ),
  new Question(
    "What does `JSON` stand for?",
    "JavaScript Object Notation",
    "Java Standard Object Notation",
    "Java Syntax Oriented Notation",
    "Java Source Object Notation",
    "A"
  ),
  new Question(
    "Which operator is used for logical AND?",
    "&&",
    "||",
    "&",
    "and",
    "A"
  ),
  new Question(
    "What is the default return value of a function that has no return statement?",
    "null",
    "undefined",
    "0",
    "NaN",
    "B"
  ),
];

const goQuestions = [
  new Question(
    "Which keyword is used to declare a variable in Go?",
    "var",
    "let",
    "const",
    "define",
    "A"
  ),
  new Question(
    "What is the default value of an uninitialized int variable in Go?",
    "null",
    "undefined",
    "0",
    "None",
    "C"
  ),
  new Question(
    "Which package is used to print output in Go?",
    "fmt",
    "io",
    "print",
    "console",
    "A"
  ),
  new Question(
    "Which keyword is used to create a function in Go?",
    "def",
    "func",
    "function",
    "define",
    "B"
  ),
  new Question(
    "Which symbol is used to import packages in Go?",
    "import",
    "#include",
    "require",
    "using",
    "A"
  ),
  new Question(
    "What is the main entry function in a Go program?",
    "start()",
    "main()",
    "init()",
    "execute()",
    "B"
  ),
  new Question(
    "Which Go data type is used to store a sequence of bytes?",
    "array",
    "slice",
    "map",
    "string",
    "D"
  ),
  new Question(
    "Which of the following is NOT a valid loop in Go?",
    "for",
    "while",
    "do-while",
    "foreach",
    "C"
  ),
  new Question(
    "Which keyword is used to define a constant in Go?",
    "final",
    "const",
    "define",
    "var",
    "B"
  ),
  new Question(
    "Which keyword is used to handle errors in Go?",
    "catch",
    "try",
    "recover",
    "error",
    "C"
  ),
  new Question(
    "Which symbol is used to declare and initialize a variable in one step?",
    "=",
    ":=",
    "::",
    "=>",
    "B"
  ),
  new Question(
    "Which function is used to concatenate strings in Go?",
    "join()",
    "concat()",
    "+",
    "append()",
    "C"
  ),
  new Question(
    "Which keyword is used to define a structure in Go?",
    "struct",
    "class",
    "interface",
    "type",
    "D"
  ),
  new Question(
    "Which function is used to find the length of an array or slice?",
    "size()",
    "length()",
    "len()",
    "count()",
    "C"
  ),
  new Question(
    "Which package is used to handle HTTP requests in Go?",
    "net/http",
    "io/http",
    "http",
    "web",
    "A"
  ),
  new Question(
    "Which of the following is NOT a Go data type?",
    "int",
    "float",
    "char",
    "rune",
    "C"
  ),
  new Question(
    "Which keyword is used to exit from a loop in Go?",
    "continue",
    "break",
    "return",
    "exit",
    "B"
  ),
  new Question(
    "Which function is used to format strings in Go?",
    "format()",
    "printf()",
    "fmt.Sprintf()",
    "str.format()",
    "C"
  ),
  new Question(
    "Which Go keyword is used to execute a function concurrently?",
    "async",
    "go",
    "thread",
    "defer",
    "B"
  ),
  new Question(
    "What is the purpose of the `defer` statement in Go?",
    "Handles errors",
    "Executes a function after the surrounding function completes",
    "Skips to the next iteration",
    "Stops execution",
    "B"
  ),
];

const phpQuestions = [
  new Question(
    "Which symbol is used to define a variable in PHP?",
    "$",
    "@",
    "#",
    "&",
    "A"
  ),
  new Question(
    "Which function is used to print output in PHP?",
    "print()",
    "echo",
    "console.log()",
    "write()",
    "B"
  ),
  new Question(
    "Which tag is used to start a PHP script?",
    "<?php",
    "<php>",
    "<script>",
    "<!php>",
    "A"
  ),
  new Question(
    "Which operator is used for string concatenation in PHP?",
    "+",
    "&",
    ".",
    ",",
    "C"
  ),
  new Question(
    "Which superglobal variable holds form data submitted via POST?",
    "$_POST",
    "$_GET",
    "$_REQUEST",
    "$_SERVER",
    "A"
  ),
  new Question(
    "Which function is used to find the length of a string?",
    "strlen()",
    "length()",
    "count()",
    "size()",
    "A"
  ),
  new Question(
    "Which keyword is used to define a class in PHP?",
    "class",
    "object",
    "define",
    "interface",
    "A"
  ),
  new Question(
    "Which function is used to include a PHP file?",
    "require",
    "include",
    "Both A and B",
    "import",
    "C"
  ),
  new Question(
    "Which function is used to check if a variable is set?",
    "isset()",
    "empty()",
    "defined()",
    "check()",
    "A"
  ),
  new Question(
    "Which function is used to get the current date in PHP?",
    "date()",
    "now()",
    "getDate()",
    "currentDate()",
    "A"
  ),
  new Question(
    "Which keyword is used to define a function in PHP?",
    "def",
    "function",
    "func",
    "define",
    "B"
  ),
  new Question(
    "Which function is used to redirect in PHP?",
    "header()",
    "redirect()",
    "navigate()",
    "go()",
    "A"
  ),
  new Question(
    "Which PHP function is used to connect to a MySQL database?",
    "mysqli_connect()",
    "mysql_open()",
    "connect_mysql()",
    "db_connect()",
    "A"
  ),
  new Question(
    "Which PHP variable type can store multiple values?",
    "String",
    "Array",
    "Int",
    "Float",
    "B"
  ),
  new Question(
    "Which operator is used to check if two values are identical?",
    "==",
    "===",
    "=",
    "!==",
    "B"
  ),
  new Question(
    "Which PHP keyword is used to define a constant?",
    "const",
    "define",
    "static",
    "final",
    "B"
  ),
  new Question(
    "Which method is used to start a PHP session?",
    "start_session()",
    "session_start()",
    "session_begin()",
    "open_session()",
    "B"
  ),
  new Question(
    "Which symbol is used to comment a single line in PHP?",
    "//",
    "/* */",
    "#",
    "--",
    "A"
  ),
  new Question(
    "Which function is used to delete a file in PHP?",
    "remove()",
    "delete()",
    "unlink()",
    "erase()",
    "C"
  ),
  new Question(
    "Which function is used to check if a file exists?",
    "file_exist()",
    "exists()",
    "file_exists()",
    "check_file()",
    "C"
  ),
];

// Game variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;
let theme;
let questionArr;

function setQuestionTheme() {
  switch (theme) {
    case "java": {
      questionArr = javaQuestions;
      break;
    }
    case "python": {
      questionArr = pythonQuestions;
      break;
    }
    case "c": {
      questionArr = cQuestions;
      break;
    }
    case "csharp": {
      questionArr = csharpQuestions;
      break;
    }
    case "cpp": {
      questionArr = cppQuestions;
      break;
    }
    case "js": {
      questionArr = jsQuestions;
      break;
    }
    case "go": {
      questionArr = goQuestions;
      break;
    }
    case "php": {
      questionArr = phpQuestions;
      break;
    }
  }
}
// DOM elements
const questionText = document.querySelector(".question");
const optionButtons = document.querySelectorAll(".option");
const timerDisplay = document.querySelector(".timer-display");
// const scoreDisplay = document.querySelector(".score-display");
const questionPanel = document.querySelector(".question-panel");
const optionPanel = document.querySelector(".option-panel");
const timeScoreDisplay = document.querySelector(".time-score-display");

function resetButtons() {
  optionButtons.forEach((button) => {
    button.style.backgroundColor = "bisque";
    button.removeAttribute("disabled");
  });
}

// Function to load a question
function loadQuestion() {
  resetButtons();
  //   scoreDisplay.textContent = `Current Score - ${score}`;
  console.log(questionArr);
  if (currentQuestionIndex < questionArr.length) {
    const q = questionArr[currentQuestionIndex];
    questionText.textContent = `Q${currentQuestionIndex + 1}: ` + q.question;
    optionButtons[0].textContent = `A) ${q.options.A}`;
    optionButtons[1].textContent = `B) ${q.options.B}`;
    optionButtons[2].textContent = `C) ${q.options.C}`;
    optionButtons[3].textContent = `D) ${q.options.D}`;
    resetTimer();
  } else {
    // End the game
    clearInterval(timer);
    questionText.textContent = `Game Over! You scored ${score} out of ${
      questionArr.length * 20
    }.`;
    optionPanel.style.display = "none"; // Hide buttons
    timeScoreDisplay.style.display = "none";
    // Add a restart button
    let rmButtonCont = document.createElement("div");
    rmButtonCont.classList.add("rm-button-cont");
    let restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("restart-button");
    restartButton.addEventListener("click", restart);
    let mainMenuButton = document.createElement("button");
    mainMenuButton.textContent = "Main Menu";
    mainMenuButton.classList.add("main-menu-button");
    mainMenuButton.addEventListener("click", returnMainMenu);
    rmButtonCont.appendChild(restartButton);
    rmButtonCont.appendChild(mainMenuButton);
    questionPanel.appendChild(rmButtonCont);
  }
}

function restart(event) {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 15;
  optionPanel.style.display = "flex";
  event.target.style.display = "none";
  timeScoreDisplay.style.display = "flex";
  let rmButtonCont = document.querySelector(".rm-button-cont");
  rmButtonCont.style.display = "none";
  loadQuestion();
}

// Function to reset and start the timer
function resetTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timerDisplay.textContent = `Time left - ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left - ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(null); // No answer selected
    }
  }, 1000);
}

// Function to check the answer
function checkAnswer(selectedAnswer, button) {
  clearInterval(timer); // Stop the timer

  if (selectedAnswer !== null) {
    let timeUsed = 15 - timeLeft;

    const correctAnswer = questionArr[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score += 20 - timeUsed;
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  }

  currentQuestionIndex++;
  setTimeout(loadQuestion, 200); // Move to the next question after a short delay
}

// Function to handle answer selection
function handleAnswer(event) {
  const selectedAnswer = event.target.value; // "A", "B", "C", or "D"
  optionButtons.forEach((button) => {
    button["disabled"] = true;
  });
  checkAnswer(selectedAnswer, event.target);
}

// Attach event listeners to buttons
optionButtons.forEach((button) => {
  button.addEventListener("click", handleAnswer);
});

function startGame() {
  let pregamePanel = document.querySelector(".pregame-panel");
  console.log("Hello");
  pregamePanel.style.display = "none";
  setQuestionTheme();
  loadQuestion();
}

function addPreGamePanel() {
  let language;
  switch (theme) {
    case "java": {
      language = "Java";
      break;
    }
    case "python": {
      language = "Python";
      break;
    }
    case "c": {
      language = "C";
      break;
    }
    case "csharp": {
      language = "C#";
      break;
    }
    case "cpp": {
      language = "C++";
      break;
    }
    case "js": {
      language = "JavaScript";
      break;
    }
    case "go": {
      language = "Go";
      break;
    }
    case "php": {
      language = "PHP";
      break;
    }
  }
  let pregamePanel = document.createElement("div");
  pregamePanel.classList.add("pregame-panel");
  let introduction = document.createElement("h2");
  introduction.classList.add("introduction");
  introduction.textContent = `Welcome to Katrivia! Let's test your knowledge on ${language} Programming Language!`;
  let gameRule = document.createElement("p");
  gameRule.textContent =
    'There are total 20 questions, each question is worth 20 points, and you have 15 seconds to answer each question. You will get deducted 1 point for each second passed, so think fast! Press "Start Game" whenever you\'re ready!';
  let startButton = document.createElement("button");
  startButton.classList.add("start-button");
  startButton.textContent = "Start Game";
  pregamePanel.appendChild(introduction);
  pregamePanel.appendChild(gameRule);
  pregamePanel.appendChild(startButton);
  questionPanel.appendChild(pregamePanel);
  startButton.addEventListener("click", startGame);
}

// Start the game
// loadQuestion();
function getQueryParam(param) {
  let params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function returnMainMenu() {
  window.location.href = "homePage.html";
}

document.addEventListener("DOMContentLoaded", function () {
  theme = getQueryParam("message");
});

window.addEventListener("load", addPreGamePanel);
