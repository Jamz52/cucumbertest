$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Kid_account_access.feature");
formatter.feature({
  "line": 2,
  "name": "Kid account access",
  "description": "The children should be able to log into their accounts and see how much money they can spend",
  "id": "kid-account-access",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "kid should log in",
  "description": "",
  "id": "kid-account-access;kid-should-log-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i am a kid with an account",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i log in after my parent has made an account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i should see my account balance",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "i should see your account balance",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I compare both",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "something else happened",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I test again x2",
  "keyword": "Then "
});
formatter.match({
  "location": "Kid_account_accessStep.that_i_am_a_logged_in_parent()"
});
formatter.result({
  "duration": 103803989,
  "status": "passed"
});
formatter.match({
  "location": "Kid_account_accessStep.i_view_the_kid_list_page()"
});
formatter.result({
  "duration": 41532,
  "status": "passed"
});
formatter.match({
  "location": "Kid_account_accessStep.i_should_see_a_link_to_add_kids()"
});
formatter.result({
  "duration": 28258,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Kid_spent_money_and_parent_is_deducting.feature");
formatter.feature({
  "line": 2,
  "name": "Kid spent money and parent is deducting",
  "description": "Here is the description for the feature as a whole",
  "id": "kid-spent-money-and-parent-is-deducting",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Parent can remove money",
  "description": "",
  "id": "kid-spent-money-and-parent-is-deducting;parent-can-remove-money",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i am logged in as a parent THIS WAS FIRST",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i view my child who spent money",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i can deduct money from the child",
  "keyword": "Then "
});
formatter.match({
  "location": "Kid_spent_money_and_parent_is_deductingStep.that_l_i_am_a_logged_in_parent()"
});
formatter.result({
  "duration": 112261,
  "status": "passed"
});
formatter.match({
  "location": "Kid_spent_money_and_parent_is_deductingStep.ss_i_view_the_kid_list_page()"
});
formatter.result({
  "duration": 33089,
  "status": "passed"
});
formatter.match({
  "location": "Kid_spent_money_and_parent_is_deductingStep.ss_i_should_see_a_link_to_add_kids()"
});
formatter.result({
  "duration": 39472,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Parent can remove moneyx",
  "description": "",
  "id": "kid-spent-money-and-parent-is-deducting;parent-can-remove-moneyx",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "i am logged in as a parentx",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "i view my child who spent moneyx",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i can deduct money from the childx",
  "keyword": "Then "
});
formatter.match({
  "location": "Kid_spent_money_and_parent_is_deductingStep.ss_that_i_am_a_logged_in_parent()"
});
formatter.result({
  "duration": 93444,
  "status": "passed"
});
formatter.match({
  "location": "Kid_spent_money_and_parent_is_deductingStep.i_view_the_kid_list_page()"
});
formatter.result({
  "duration": 29978,
  "status": "passed"
});
formatter.match({
  "location": "Kid_spent_money_and_parent_is_deductingStep.i_can_should_see_a_link_to_add_kids()"
});
formatter.result({
  "duration": 28556,
  "status": "passed"
});
formatter.uri("Kids_spending_money.feature");
formatter.feature({
  "line": 2,
  "name": "Kids spending money",
  "description": "Kids should be able to spend money from their ledger if they have some",
  "id": "kids-spending-money",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Kid landing page is ledger screen",
  "description": "",
  "id": "kids-spending-money;kid-landing-page-is-ledger-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am a kid who has an account",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "kid logs in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be redirected to the ledgar screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Kids_spending_moneyStep.i_am_a_kid_who_has_an_account()"
});
formatter.result({
  "duration": 115800,
  "status": "passed"
});
formatter.match({
  "location": "Kids_spending_moneyStep.kid_logs_in()"
});
formatter.result({
  "duration": 26858,
  "status": "passed"
});
formatter.match({
  "location": "Kids_spending_moneyStep.i_should_be_redirected_to_the_ledgar_screen()"
});
formatter.result({
  "duration": 25421,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Kid should see spend money button",
  "description": "",
  "id": "kids-spending-money;kid-should-see-spend-money-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am a logged in kid with an account balance greater than 0",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "kid logs in",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should have a Spend Money Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Kids_spending_moneyStep.i_am_a_logged_in_kid_with_an_account_balance_greater_than_0()"
});
formatter.result({
  "duration": 65499,
  "status": "passed"
});
formatter.match({
  "location": "Kids_spending_moneyStep.kid_logs_in()"
});
formatter.result({
  "duration": 21929,
  "status": "passed"
});
formatter.match({
  "location": "Kids_spending_moneyStep.i_should_have_a_spend_money_button()"
});
formatter.result({
  "duration": 30087,
  "status": "passed"
});
formatter.uri("Parent_creating_child_accounts.feature");
formatter.feature({
  "line": 2,
  "name": "Parent creating child accounts",
  "description": "Parents should create accounts for their children. Kids should not make their own accounts",
  "id": "parent-creating-child-accounts",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Parent should see link to add new kid",
  "description": "",
  "id": "parent-creating-child-accounts;parent-should-see-link-to-add-new-kid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that I am a logged in parent",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I view the the kid list page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see a link to add kid",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "this edit should work",
  "keyword": "Then "
});
formatter.match({
  "location": "Parent_creating_child_accountsStep.that_i_am_a_logged_in_parent()"
});
formatter.result({
  "duration": 119829,
  "status": "passed"
});
formatter.match({
  "location": "Parent_creating_child_accountsStep.i_view_the_kid_list_page()"
});
formatter.result({
  "duration": 26184,
  "status": "passed"
});
formatter.match({
  "location": "Parent_creating_child_accountsStep.i_should_see_a_link_to_add_kids()"
});
formatter.result({
  "duration": 24876,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Parent_gives_kid_money.feature");
formatter.feature({
  "line": 2,
  "name": "Parent gives kid money",
  "description": "Parents should be able to give their kids money for allowance or for doing specific chores",
  "id": "parent-gives-kid-money",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Give Kid Amount Button",
  "description": "",
  "id": "parent-gives-kid-money;give-kid-amount-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Parent is logged in and has children",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Parent selects child",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Parent should see an option to give money",
  "keyword": "Then "
});
formatter.match({
  "location": "Parent_gives_kid_moneyStep.that_i_am_a_logged_in_parent()"
});
formatter.result({
  "duration": 103338,
  "status": "passed"
});
formatter.match({
  "location": "Parent_gives_kid_moneyStep.i_view_the_kid_list_page()"
});
formatter.result({
  "duration": 25967,
  "status": "passed"
});
formatter.match({
  "location": "Parent_gives_kid_moneyStep.i_should_see_a_link_to_add_kids()"
});
formatter.result({
  "duration": 24430,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Give Kid Amount Button",
  "description": "",
  "id": "parent-gives-kid-money;give-kid-amount-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Parent is logged in and has children",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Parent selects dog",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Parent should see an option to give treat",
  "keyword": "Then "
});
formatter.match({
  "location": "Parent_gives_kid_moneyStep.that_i_am_a_logged_in_parent()"
});
formatter.result({
  "duration": 66818,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "test",
  "description": "test",
  "id": "test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "",
  "id": "test;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "something",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "something else",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});