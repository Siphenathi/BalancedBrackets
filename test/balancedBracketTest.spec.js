describe("BalanceBracket", function () {
    describe("CreateBrackets", function () {
        describe("Given no brackets", function () {
            it("Should return OK", function () {
                //Arrange
                let sut = new BalancedBracket();
                let input = "";
                //Act
                let actual = sut.CreateBrackets(input);
                //Assert
                expect(actual).toBe("OK");
            })
        })
        describe("Given input of []", function(){
            it("Should return OK", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = ['[',']']
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("OK");
            })
        })
        describe("Given input of [] []", function(){
            it("Should return OK", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = ['[',']','[',']']
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("OK");
            })
        })
        describe("Given input of [[]]", function(){
            it("Should return OK", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = ['[','[',']',']']
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("OK");
            })
        })
        describe("Given input of [] []", function(){
            it("Should return OK", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = ['[',']','[',']']
                   //let input = '[][]'
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("OK");
            })
        })
        describe("Given input of [[[][]]]", function(){
            it("Should return OK", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = ['[','[','[',']','[',']',']',']']
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("OK");
            })
        })

        describe("Given input of ][][", function(){
            it("Should return FAIL", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = [']','[',']','[']
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("FAIL");
            })
        })

        describe("Given input of [][]][", function(){
            it("Should return FAIL", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = ['[',']','[',']',']','[']
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("FAIL");
            })
        })

        describe("Given input of [[]", function(){
            it("Should return FAIL", function(){
                   //Arrange
                   let sut = new BalancedBracket();
                   let input = ['[','[',']']
                   //Act
                   let actual = sut.CreateBrackets(input);
                   //Assert
                   expect(actual).toBe("FAIL");
            })
        })
        

    })
})