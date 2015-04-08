vennEmail = require("venn-email")

vennApiKey = "VENN API KEY HERE"
toEmailAddress = "TO: EMAIL ADDRESS HERE"
vennEmail.initialize(vennApiKey)
vennEmail.send("from@email.com", toEmailAddress, "subject-1", "message-1", function(err, result){console.log("email successfully sent with:", result)})