angular.module("app").controller('practiceStaffCtrl', function ($scope) {

    $scope.patientData = [{
        firstName: "Corey",
        middleName: "Blaine",
        lastName: "Robison",
        insurance: {
            plan_name: "Blue Cross",
            plan_phone: 559-583-5555,
            member_id: 123456789,
        },
        phoneNumber: 916-694-5555,
        email: "coreybrobison@gmail.com",
        address: {
            street: "76 W. Lester Ave.",
            city: "Hanford",
            state: "CA",
            zip: 93230
        },
        dateOfBirth: 07/08/90,
        lastFourSocial: "1234",
        patientNotes: "TEST",
    },

    {
        firstName: "Corey",
        middleName: "Blaine",
        lastName: "Robison",
        insurance: {
            plan_name: "Blue Cross",
            plan_phone: 559-583-5555,
            member_id: 123456789,
        },
        phoneNumber: 916-694-5555,
        email: "coreybrobison@gmail.com",
        address: {
            street: "76 W. Lester Ave.",
            city: "Hanford",
            state: "CA",
            zip: 93230
        },
        dateOfBirth: 01/23/72,
        lastFourSocial: "5678",
        patientNotes: "TEST",
    },

    {
        firstName: "Kyle",
        middleName: "Killin'",
        lastName: "Barlow",
        insurance: {
            plan_name: "Blue Shield",
            plan_phone: 555-555-5555,
            member_id: 987456321,
        },
        phoneNumber: 973-645-5555,
        email: "kyle@kyle.com",
        address: {
            street: "323 Hello Lane",
            city: "Provo",
            state: "UT",
            zip: 84121
        },
        dateOfBirth: 09/12/89,
        lastFourSocial: "8956",
        patientNotes: "Dude McGee TEST",
    }]


});