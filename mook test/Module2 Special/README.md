# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# test-member-form

1.  Member data prepared in ./data/members.js with two functions: { getMembers, findMember }

2.  A function called _memberForm()_ works when a user clicks a member button, a member search panel will show. After the user enters a searching member id, if found then the member detail will display, otherwise, no data shows. Write three nested functions in the following:

    - Nested Functions:

      - **addEventHandler()** adds _memberHandler()_ function to a member button and _searchHandler()_ function to a search button with event 'click'. 

      - **memberHandler()** when a user clicks a member button, in case there are previous searching results, you must clear all previous content firstly. Then you must create and display a member id's search panel within `<div id="searchMember"></div>`. The search panel consists of the following element structure:

        ```
           <p>Your Member Id:</p>
           <input id="memberId">
           <button>search</button>
        ```


        You must add _searchHandler_ function to a search button

      - **searchHandler()** when a user clicks a search button, in case there are previous searching results, you must clear all previous content firstly. Then you must call _findMember()_ function (imported from members.js ) and then create and display the member object returned from the function within `<div id="foundMember"></div>`. For example, if searching with 1003, it will result in the following element structure:

        ```
           <p>id: 1003</p>
           <p>firstname: Zaida</p>
           <p>lastname: Daniels</p>
           <p>email: ZaidaDaniels@dayrep.com</p>
           <p>address: 1367 Clarksburg Park Road Sedona, AZ 86336</p>
        ```

        Note that there is one white space after comma (:).

## Test Structures

- test('output#1: _addEventHandler_')
- test('output#2: _addEventHandler and memberHandler_)
- test('output#3: _addEventHandler, memberHandler, and searchHandler (found member)_)
- test('output#4: _addEventHandler, memberHandler, and searchHandler (not found member)_)

## Screen Capture Outputs

1. Customer Form

   ![Customer Form](/assets/images/output1.JPG)

2. When click a Member button
   ![ When click the Member button ](/assets/images/output2.JPG)

3. When enter your Member Id

   ![When enter your Member Id ](/assets/images/output3.JPG)

4. Show member detail when click a search button with "1003" search value

   ![Show member detail when click a search button with "1003" search value](/assets/images/output4.JPG)
