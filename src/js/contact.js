"use strict";

function erasePlaceHolder() {
    if ($("#contact-form-message").val() == "MENSAGEM") {
        $("#contact-form-message").val("");
        $("#contact-form-message").css("color", "white");
    }
}

function validateName() {
    if ($("#contact-form-name").val() == "") {
        $("#name-validation").text("Nome não pode estar em branco.");
        return;
    }

    $("#name-validation").text("");
}

function validateEmail() {
    var email = $("#contact-form-email").val();

    if (email == "") {
        $("#email-validation").text("E-mail não pode estar em branco.");
        return;
    }

    var atPosition = email.indexOf("@");
    var dotPosisition = email.lastIndexOf(".");

    if (atPosition < 1 || dotPosisition < atPosition + 2 || dotPosisition + 2 >= email.length) {
        $("#email-validation").text("Este e-mail não é válido.");
        return;
    }

    $("#email-validation").text("");
}

function validateMessage() {
    if ($("#contact-form-message").val() == "" || $("#contact-form-message").val() == "MENSAGEM") {
        $("#message-validation").text("Mensagem não pode estar em branco.");
        return;
    }

    $("#message-validation").text("");
}

function sendMessage() {
    showWaitAnimation();

    $.ajax({
        url: 'php/sendMail.php',
        type: 'POST',
        data: {
            name: $("#contact-form-name").val(),
            mail: $("#contact-form-email").val(),
            message: $("#contact-form-message").val()
        },
        error: function(msg) {
            hideWaitAnimation();
        },
        success: function(msg) {
            hideWaitAnimation();

            if (msg.indexOf("SMTP connect() failed") > -1) {
                $("#message-result").text("Não foi possível enviar a mensagem!");
            } else {
                $("#message-result").text("Mensagem enviada com sucesso!");
            }
        }
    });
}