$(function () {

    // Step show event
    $("#smartwizard").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
        //alert("You are on step "+stepNumber+" now");
        if (stepPosition === 'first') {
//                   $("#prev-btn").addClass('disabled');
        } else if (stepPosition === 'final') {
            $("#next-btn").addClass('disabled');
        } else {
//                   $("#prev-btn").removeClass('disabled');
            $("#next-btn").removeClass('disabled');
        }
    });

    //datapicker validations  label fixes
    $date.datepicker({}).on('change', function (e) {
        $(this).parents('.form-group').find('label').addClass('focus');
        $(this).valid();
    });

    // Toolbar extra buttons
    var btnFinish = $('<button></button>').text('Finish')
        .addClass('btn btn-info')
        .on('click', function () {
            alert('Finish Clicked');
        });
    var btnCancel = $('<button></button>').text('Cancel')
        .addClass('btn btn-danger')
        .on('click', function () {
            $('#smartwizard').smartWizard("reset");
        });

    // Please note enabling option "showStepURLhash" will make navigation conflict for multiple wizard in a page.
    // so that option is disabling => showStepURLhash: false

    // Smart Wizard 1
    $('#smartwizard').smartWizard({
        selected: 0,
        theme: 'arrows',
        transitionEffect: 'fade',
        showStepURLhash: false,
        toolbarSettings: {
            toolbarPosition: 'bottom',
            toolbarExtraButtons: [btnFinish, btnCancel]
        }
    });
});


//  $(function(){
$('#step1').validate({
    rules: {
        firstname: {
            required: true,
            minlength: 2
        },
        lastname: {
            required: true,
            minlength: 2
        },
        date_birth: {
            required: true
        },
        street: {
            required: true
        },
        city: {
            required: true
        },
        state: {
            required: true
        },
        zip_code: {
            required: true
        }
    },
    messages: {
        date_birth: {
            required: "Must be in format MM/DD/YYYY"
        }
    },
    submitHandler: function () {
        if ($('#step1').valid()) {
            $('#donor_q_next').click();
        }
    }
});

$('#i_starting_from').datepicker();

//     Step2-------------

$('#step2').validate({
    rules: {
        high_school: {
            required: true
        },
        college: {
            required: true
        }
    },
    messages: {
        high_school: {
            required: "&nbsp;&nbsp;&nbsp;&nbsp;*High school information required."
        },
        college: {
            required: "&nbsp;&nbsp;&nbsp;&nbsp;*College information required."
        }
    },
    submitHandler: function () {
        if ($('#step2').valid()) {
            $('#donor_q_next').click();
        }
    }
});

$('#c_c_attending_college').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_c_attending_college').rules("add", {
            required: true
        });
    } else {
        $('#i_c_attending_college').rules("remove");
    }
});
$('#c_graduate_degree').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_graduate_degree').rules("add", {
            required: true
        });
    } else {
        $('#i_graduate_degree').rules("remove");
    }
});
$('#c_post_graduate_degree').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_post_graduate_degree').rules("add", {
            required: true
        });
    } else {
        $('#i_post_graduate_degree').rules("remove");
    }
});
$('#c_degree_other').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_degree_other').rules("add", {
            required: true
        });
    } else {
        $('#i_degree_other').rules("remove");
    }
});


//     Step3-------------

$('#step3').validate({
    rules: {
        martialStatus: {
            required: true
        },
        livingArrangement: {
            required: true
        },
        sexual_partners: {
            required: true
        },
        sexual: {
            required: true
        },
        currentsexual: {
            required: true
        }
    },
    messages: {
        martialStatus: {
            required: "Martial Status information required."
        },
        livingArrangement: {
            required: "Living arrangement information required."
        },
        sexual_partners: {
            required: "*required"
        },
        currentsexual: {
            required: "*required"
        }
    },
    submitHandler: function () {
        if ($('#step3').valid()) {
            $('#donor_q_next').click();
        }
    }
});

//     Step4-------------

$('#step4').validate({
    rules: {
        pregnancyHistory: {
            required: true
        },
        firstPeriod: {
            required: true
        },
        menstrualbleeding: {
            required: true
        },
        lastpap: {
            required: true
        },
        oralContraceptives: {
            required: true
        },
        birthControl: {
            required: true
        },
        progesteroneInjections: {
            required: true
        },
        progesteroneImplants: {
            required: true
        },
        intrauterineDevice: {
            required: true
        },
        sterilization: {
            required: true
        },
        condoms: {
            required: true
        }
    },
    messages: {
        martialStatus: {
            required: "Pregnancy History required."
        },
        firstPeriod: {
            required: "First Period information required."
        },
        menstrualbleeding: {
            required: "Menmenstrual bleeding required."
        },
        lastpap: {
            required: "Last PAP required"
        },
        oralContraceptives: {
            required: "Oral Contraceptives field required"
        },
        birthControl: {
            required: "Birth Control field required."
        },
        progesteroneInjections: {
            required: "Progesterone Injections field required."
        },
        progesteroneImplants: {
            required: "Progesterone Implants field required."
        },
        intrauterineDevice: {
            required: "Intrauterine Device field required."
        },
        sterilization: {
            required: "Sterilization field required."
        },
        condoms: {
            required: "Condoms field required."
        }
    },
    submitHandler: function () {
        if ($('#step4').valid()) {
            $('#donor_q_next').click();
        }
    }
});


$('#c_did_you_deliver_1').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#d_yearofpregnancy_1').rules("add", {
            required: true
        });
        $('#d_boyGirl_1').rules("add", {
            required: true
        });
        $('#i_child_have_prob_1').rules("add", {
            required: true
        });
        $('#d_yearofpregnancy_1').rules("add", {
            required: true
        });
    } else {
        $('#d_yearofpregnancy_1').rules("remove");
        $('#d_boyGirl_1').rules("remove");
        $('#i_child_have_prob_1').rules("remove");
        $('#i_how_pregnancy_end_1').rules("remove");
    }
});
$('#c_did_you_deliver_2').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#d_yearofpregnancy_2').rules("add", {
            required: true
        });
        $('#d_boyGirl_2').rules("add", {
            required: true
        });
        $('#i_child_have_prob_2').rules("add", {
            required: true
        });
        $('#d_yearofpregnancy_2').rules("add", {
            required: true
        });
    } else {
        $('#d_yearofpregnancy_2').rules("remove");
        $('#d_boyGirl_2').rules("remove");
        $('#i_child_have_prob_2').rules("remove");
        $('#i_how_pregnancy_end_2').rules("remove");
    }
});
$('#c_did_you_deliver_3').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#d_yearofpregnancy_3').rules("add", {
            required: true
        });
        $('#d_boyGirl_3').rules("add", {
            required: true
        });
        $('#i_child_have_prob_3').rules("add", {
            required: true
        });
        $('#d_yearofpregnancy_3').rules("add", {
            required: true
        });
    } else {
        $('#d_yearofpregnancy_3').rules("remove");
        $('#d_boyGirl_3').rules("remove");
        $('#i_child_have_prob_3').rules("remove");
        $('#i_how_pregnancy_end_3').rules("remove");
    }
});
$('#c_did_you_deliver_4').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#d_yearofpregnancy_4').rules("add", {
            required: true
        });
        $('#d_boyGirl_4').rules("add", {
            required: true
        });
        $('#i_child_have_prob_4').rules("add", {
            required: true
        });
        $('#d_yearofpregnancy_4').rules("add", {
            required: true
        });
    } else {
        $('#d_yearofpregnancy_4').rules("remove");
        $('#d_boyGirl_4').rules("remove");
        $('#i_child_have_prob_4').rules("remove");
        $('#i_how_pregnancy_end_4').rules("remove");
    }
});


//     Step5-------------

validator = $('#step5').validate({
    rules: {
        exercise: {
            required: true
        },
        diet: {
            required: true
        },
        typeofexercise: {
            required: true
        },
        qualitydiet: {
            required: true
        },
        d_cigarettesTabacco: {
            required: true
        },
        d_alcohol: {
            required: true
        },
        d_marijuana: {
            required: true
        },
        d_heroin: {
            required: true
        },
        d_cocaine: {
            required: true
        },
        d_crystalmeth: {
            required: true
        },
        d_lsd: {
            required: true
        },
        d_pcp: {
            required: true
        },
        d_injectable: {
            required: true
        }
    },
    messages: {
        exercise: {
            required: "Exercise field required."
        },
        diet: {
            required: "Diet field required."
        },
        qualitydiet: {
            required: "Quality Diet field required."
        },
        d_cigarettesTabacco: {
            required: "Cigarettes field required"
        },
        d_alcohol: {
            required: "Alcohol field required"
        },
        d_marijuana: {
            required: "Marijuana field required."
        },
        d_heroin: {
            required: "Heroin field required."
        },
        d_cocaine: {
            required: "Cocaine field required."
        },
        d_crystalmeth: {
            required: "Crystal Meth field required."
        },
        d_lsd: {
            required: "LSD field required."
        },
        d_pcp: {
            required: "PCP field required."
        },
        d_injectable: {
            required: "Injectable field required."
        }
    },
    submitHandler: function () {
        if ($('#step5').valid()) {
            $('#donor_q_next').click();
        }
    }
});

$body.on("change", "#d_cigarettesTabacco", function () {
    if ($(this).val() !== "Never") {
        $('#i_cigarettesTobacco').rules("add", {
            required: true
        });
    } else {
        $('#i_cigarettesTobacco').rules("remove");
    }
});

$body.on("change", "#d_alcohol", function () {
    if ($(this).val() !== "Never") {
        $('#i_alcohol').rules("add", {
            required: true
        });
    } else {
        $('#i_alcohol').rules("remove");
    }
});

$body.on("change", "#d_marijuana", function () {
    if ($(this).val() !== "Never") {
        $('#i_marijuana').rules("add", {
            required: true
        });
    } else {
        $('#i_marijuana').rules("remove");
    }
});

$body.on("change", "#d_heroin", function () {
    if ($(this).val() !== "Never") {
        $('#i_heroin').rules("add", {
            required: true
        });
    } else {
        $('#i_heroin').rules("remove");
    }
});

$body.on("change", "#d_heroin", function () {
    if ($(this).val() !== "Never") {
        $('#i_heroin').rules("add", {
            required: true
        });
    } else {
        $('#i_heroin').rules("remove");
    }
});

$('#c_arrested').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_arrested').rules("add", {
            required: true
        });
    } else {
        $('#i_arrested').rules("remove");
    }
});

$('#c_convicted').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_convicted').rules("add", {
            required: true
        });
    } else {
        $('#i_convicted').rules("remove");
    }
});

$('#s_n_used_1').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#d_n_used_1').rules("add", {
            required: true
        });
        $('#t_n_used_1').rules("add", {
            required: true
        });
        $('#i_n_used_1').rules("add", {
            required: true
        });
    } else {
        $('#d_n_used_1').rules("remove");
        $('#t_n_used_1').rules("remove");
        $('#i_n_used_1').rules("remove");
    }
});

$('#s_n_used_2').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#d_n_used_2').rules("add", {
            required: true
        });
        $('#t_n_used_2').rules("add", {
            required: true
        });
        $('#i_n_used_2').rules("add", {
            required: true
        });
    } else {
        $('#d_n_used_2').rules("remove");
        $('#t_n_used_2').rules("remove");
        $('#i_n_used_2').rules("remove");
    }
});

$('#s_n_used_3').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#d_n_used_3').rules("add", {
            required: true
        });
        $('#t_n_used_3').rules("add", {
            required: true
        });
        $('#i_n_used_3').rules("add", {
            required: true
        });
    } else {
        $('#d_n_used_3').rules("remove");
        $('#t_n_used_3').rules("remove");
        $('#i_n_used_3').rules("remove");
    }
});


// Step6 --------------

$("#step6").validate({
    submitHandler: function () {
        if ($('#step6').valid()) {
            $('#donor_q_next').click();
        }
    }
});

$('#c_blood_transfusion').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_blood_transfusion').rules("add", {
            required: true
        });
    } else {
        $('#i_blood_transfusion').rules("remove");
    }
});

$('#c_blood_donor').on("click", function (evt) {
    if ($(this).is(":checked")) {
        $('#i_blood_donor').rules("add", {
            required: true
        });
    } else {
        $('#i_blood_donor').rules("remove");
    }
});


//     Step7------------

validator = $('#step7').validate({
    rules: {
        d_have_vaccinated: {
            required: true
        }
    },
    messages: {
        d_have_vaccinated: {
            required: "Answer to this question is required."
        }
    },
    submitHandler: function () {
        if ($('#step7').valid()) {
            $('#donor_q_next').click();
        }
    }
});

$body.on("change", "#d_have_vaccinated", function () {
    if ($(this).val() !== "No") {
        $('#i_have_vaccinated').rules("add", {
            required: true
        });
    } else {
        $('#i_have_vaccinated').rules("remove");
    }
});

$body.on("change", "#i_medical_prob_1", function () {
    if ($(this).val() !== "") {
        $('#i_age_onset_1').rules("add", {
            required: true
        });
        $('#i_medical_comment_1').rules("add", {
            required: true
        });
    } else {
        $('#i_age_onset_1').rules("remove");
        $('#i_medical_comment_1').rules("remove");
    }
});

$body.on("change", "#i_medical_prob_2", function () {
    if ($(this).val() !== "") {
        $('#i_age_onset_2').rules("add", {
            required: true
        });
        $('#i_medical_comment_2').rules("add", {
            required: true
        });
    } else {
        $('#i_age_onset_2').rules("remove");
        $('#i_medical_comment_2').rules("remove");
    }
});
$body.on("change", "#i_medical_prob_3", function () {
    if ($(this).val() !== "") {
        $('#i_age_onset_3').rules("add", {
            required: true
        });
        $('#i_medical_comment_3').rules("add", {
            required: true
        });
    } else {
        $('#i_age_onset_3').rules("remove");
        $('#i_medical_comment_3').rules("remove");
    }
});
$body.on("change", "#i_medical_prob_4", function () {
    if ($(this).val() !== "") {
        $('#i_age_onset_4').rules("add", {
            required: true
        });
        $('#i_medical_comment_4').rules("add", {
            required: true
        });
    } else {
        $('#i_age_onset_4').rules("remove");
        $('#i_medical_comment_4').rules("remove");
    }
});
$body.on("change", "#i_medical_prob_5", function () {
    if ($(this).val() !== "") {
        $('#i_age_onset_5').rules("add", {
            required: true
        });
        $('#i_medical_comment_5').rules("add", {
            required: true
        });
    } else {
        $('#i_age_onset_5').rules("remove");
        $('#i_medical_comment_5').rules("remove");
    }
});

$body.on("change", "#i_type_surgery_1", function () {
    if ($(this).val() !== "") {
        $('#i_surgery_date_1').rules("add", {
            required: true
        });
        $('#i_surgery_complication_1').rules("add", {
            required: true
        });
    } else {
        $('#i_surgery_date_1').rules("remove");
        $('#i_surgery_complication_1').rules("remove");
    }
});
$body.on("change", "#i_type_surgery_2", function () {
    if ($(this).val() !== "") {
        $('#i_surgery_date_2').rules("add", {
            required: true
        });
        $('#i_surgery_complication_2').rules("add", {
            required: true
        });
    } else {
        $('#i_surgery_date_2').rules("remove");
        $('#i_surgery_complication_2').rules("remove");
    }
});
$body.on("change", "#i_type_surgery_3", function () {
    if ($(this).val() !== "") {
        $('#i_surgery_date_3').rules("add", {
            required: true
        });
        $('#i_surgery_complication_3').rules("add", {
            required: true
        });
    } else {
        $('#i_surgery_date_3').rules("remove");
        $('#i_surgery_complication_3').rules("remove");
    }
});
$body.on("change", "#i_type_surgery_4", function () {
    if ($(this).val() !== "") {
        $('#i_surgery_date_4').rules("add", {
            required: true
        });
        $('#i_surgery_complication_4').rules("add", {
            required: true
        });
    } else {
        $('#i_surgery_date_4').rules("remove");
        $('#i_surgery_complication_4').rules("remove");
    }
});
$body.on("change", "#i_type_surgery_5", function () {
    if ($(this).val() !== "") {
        $('#i_surgery_date_5').rules("add", {
            required: true
        });
        $('#i_surgery_complication_5').rules("add", {
            required: true
        });
    } else {
        $('#i_surgery_date_5').rules("remove");
        $('#i_surgery_complication_5').rules("remove");
    }
});

$body.on("change", "#i_p_medication_1", function () {
    if ($(this).val() !== "") {
        $('#i_p_how_often_1').rules("add", {
            required: true
        });
        $('#i_p_medication_reason_1').rules("add", {
            required: true
        });
    } else {
        $('#i_p_how_often_1').rules("remove");
        $('#i_p_medication_reason_1').rules("remove");
    }
});
$body.on("change", "#i_p_medication_2", function () {
    if ($(this).val() !== "") {
        $('#i_p_how_often_2').rules("add", {
            required: true
        });
        $('#i_p_medication_reason_2').rules("add", {
            required: true
        });
    } else {
        $('#i_p_how_often_2').rules("remove");
        $('#i_p_medication_reason_2').rules("remove");
    }
});
$body.on("change", "#i_p_medication_3", function () {
    if ($(this).val() !== "") {
        $('#i_p_how_often_3').rules("add", {
            required: true
        });
        $('#i_p_medication_reason_3').rules("add", {
            required: true
        });
    } else {
        $('#i_p_how_often_3').rules("remove");
        $('#i_p_medication_reason_3').rules("remove");
    }
});
$body.on("change", "#i_p_medication_4", function () {
    if ($(this).val() !== "") {
        $('#i_p_how_often_4').rules("add", {
            required: true
        });
        $('#i_p_medication_reason_4').rules("add", {
            required: true
        });
    } else {
        $('#i_p_how_often_4').rules("remove");
        $('#i_p_medication_reason_4').rules("remove");
    }
});
$body.on("change", "#i_p_medication_5", function () {
    if ($(this).val() !== "") {
        $('#i_p_how_often_5').rules("add", {
            required: true
        });
        $('#i_p_medication_reason_5').rules("add", {
            required: true
        });
    } else {
        $('#i_p_how_often_5').rules("remove");
        $('#i_p_medication_reason_5').rules("remove");
    }
});

$body.on("change", "#i_c_medication_1", function () {
    if ($(this).val() !== "") {
        $('#i_c_how_often_1').rules("add", {
            required: true
        });
        $('#i_c_medication_reason_1').rules("add", {
            required: true
        });
    } else {
        $('#i_c_how_often_1').rules("remove");
        $('#i_c_medication_reason_1').rules("remove");
    }
});
$body.on("change", "#i_c_medication_2", function () {
    if ($(this).val() !== "") {
        $('#i_c_how_often_2').rules("add", {
            required: true
        });
        $('#i_c_medication_reason_2').rules("add", {
            required: true
        });
    } else {
        $('#i_c_how_often_2').rules("remove");
        $('#i_c_medication_reason_2').rules("remove");
    }
});
$body.on("change", "#i_c_medication_3", function () {
    if ($(this).val() !== "") {
        $('#i_c_how_often_3').rules("add", {
            required: true
        });
        $('#i_c_medication_reason_3').rules("add", {
            required: true
        });
    } else {
        $('#i_c_how_often_3').rules("remove");
        $('#i_c_medication_reason_3').rules("remove");
    }
});
$body.on("change", "#i_c_medication_4", function () {
    if ($(this).val() !== "") {
        $('#i_c_how_often_4').rules("add", {
            required: true
        });
        $('#i_c_medication_reason_4').rules("add", {
            required: true
        });
    } else {
        $('#i_c_how_often_4').rules("remove");
        $('#i_c_medication_reason_4').rules("remove");
    }
});
$body.on("change", "#i_c_medication_5", function () {
    if ($(this).val() !== "") {
        $('#i_c_how_often_5').rules("add", {
            required: true
        });
        $('#i_c_medication_reason_5').rules("add", {
            required: true
        });
    } else {
        $('#i_c_how_often_5').rules("remove");
        $('#i_c_medication_reason_5').rules("remove");
    }
});

$body.on("change", "#i_substance_1", function () {
    if ($(this).val() !== "") {
        $('#i_type_reaction_1').rules("add", {
            required: true
        });
    } else {
        $('#i_type_reaction_1').rules("remove");
    }
});
$body.on("change", "#i_substance_2", function () {
    if ($(this).val() !== "") {
        $('#i_type_reaction_2').rules("add", {
            required: true
        });
    } else {
        $('#i_type_reaction_2').rules("remove");
    }
});
$body.on("change", "#i_substance_3", function () {
    if ($(this).val() !== "") {
        $('#i_type_reaction_3').rules("add", {
            required: true
        });
    } else {
        $('#i_type_reaction_3').rules("remove");
    }
});
$body.on("change", "#i_substance_4", function () {
    if ($(this).val() !== "") {
        $('#i_type_reaction_4').rules("add", {
            required: true
        });
    } else {
        $('#i_type_reaction_4').rules("remove");
    }
});
$body.on("change", "#i_substance_5", function () {
    if ($(this).val() !== "") {
        $('#i_type_reaction_5').rules("add", {
            required: true
        });
    } else {
        $('#i_type_reaction_5').rules("remove");
    }
});


// Step 8 ----------------

$('#step8').validate({
    rules: {
        d_cleftlip: {
            required: true
        },
        d_cleftpalate: {
            required: true
        },
        d_congenitalhip: {
            required: true
        },
        d_clubfoot: {
            required: true
        },
        d_heartdefect: {
            required: true
        },
        d_hearingproblems: {
            required: true
        },
        d_spina: {
            required: true
        },
        d_microcephaly: {
            required: true
        },
        d_holoprosencephaly: {
            required: true
        },
        d_babiesdiedatbirth: {
            required: true
        },
        d_dwarfism: {
            required: true
        },
        d_hypospadias: {
            required: true
        },
        d_phenylketonuria: {
            required: true
        },
        d_polycystickidney: {
            required: true
        },
        d_pyloricstenosis: {
            required: true
        },
        d_othercogenital: {
            required: true
        },
        d_downsyndrome: {
            required: true
        },
        d_fragilex: {
            required: true
        },
        d_turnursyndrom: {
            required: true
        },
        d_klinefelter: {
            required: true
        },
        d_otherchromosomal: {
            required: true
        },

        d_alpha_1: {
            required: true
        },
        d_bloom: {
            required: true
        },
        d_canavan: {
            required: true
        },
        d_cysticfibroses: {
            required: true
        },
        d_fabrydisease: {
            required: true
        },
        d_factorv: {
            required: true
        },
        d_familial: {
            required: true
        },
        d_familialfever: {
            required: true
        },
        d_fanconi: {
            required: true
        },
        d_hemophilia: {
            required: true
        },
        d_marfan: {
            required: true
        },
        d_mucolipidosis: {
            required: true
        },
        d_niemann: {
            required: true
        },
        d_sickle: {
            required: true
        },
        d_taysachs: {
            required: true
        },
        d_thallasmia: {
            required: true
        },
        d_blindness: {
            required: true
        },
        d_colorblind: {
            required: true
        },
        d_deafness: {
            required: true
        },
        d_albinism: {
            required: true
        },
        d_muscular: {
            required: true
        },
        d_galactosemia: {
            required: true
        },
        d_hurler: {
            required: true
        },
        d_other_genetic: {
            required: true
        },
        d_breast_cancer: {
            required: true
        },
        d_colon_cancer: {
            required: true
        },
        d_hereditary_non: {
            required: true
        },
        d_ovarian_cancer: {
            required: true
        },
        d_any_other_cancer: {
            required: true
        },
        d_alzheimer: {
            required: true
        },
        d_autism: {
            required: true
        },
        d_cerebral: {
            required: true
        },
        d_creultzfeldt: {
            required: true
        },
        d_depression: {
            required: true
        },
        d_gaucher: {
            required: true
        },
        d_huntington: {
            required: true
        },
        d_hydrocephalus: {
            required: true
        },
        d_obsessive_compulsive: {
            required: true
        },
        d_mania: {
            required: true
        },
        d_mental: {
            required: true
        },
        d_neurofibro: {
            required: true
        },
        d_schizo: {
            required: true
        },
        d_tourette: {
            required: true
        },
        d_tuberous: {
            required: true
        },
        d_wilson_disease: {
            required: true
        },
        d_multiple_sclerosis: {
            required: true
        },
        d_parkinson: {
            required: true
        },
        d_lou_gehrig: {
            required: true
        },
        d_any_other_neuro: {
            required: true
        },
        d_diabetes: {
            required: true
        },
        d_heart_disease: {
            required: true
        },
        d_high_blood: {
            required: true
        },
        d_asthma: {
            required: true
        },
        d_lupus: {
            required: true
        },
        d_obesity: {
            required: true
        },
        d_alcoholism: {
            required: true
        },
        d_infertility: {
            required: true
        },
        d_recurrent: {
            required: true
        },
        d_endometriosis: {
            required: true
        },
        d_polycystic_ovary: {
            required: true
        },
        d_uterine_fibroids: {
            required: true
        },
        d_f_cleftlip: {
            required: true
        },
        d_f_cleftpalate: {
            required: true
        },
        d_f_congenitalhip: {
            required: true
        },
        d_f_clubfoot: {
            required: true
        },
        d_f_heartdefect: {
            required: true
        },
        d_f_hearingproblems: {
            required: true
        },
        d_f_spina: {
            required: true
        },
        d_f_microcephaly: {
            required: true
        },
        d_f_holoprosencephaly: {
            required: true
        },
        d_f_babiesdiedatbirth: {
            required: true
        },
        d_f_dwarfism: {
            required: true
        },
        d_f_hypospadias: {
            required: true
        },
        d_f_phenylketonuria: {
            required: true
        },
        d_f_polycystickidney: {
            required: true
        },
        d_f_pyloricstenosis: {
            required: true
        },
        d_f_othercogenital: {
            required: true
        },
        d_f_downsyndrome: {
            required: true
        },
        d_f_fragilex: {
            required: true
        },
        d_f_turnursyndrom: {
            required: true
        },
        d_f_klinefelter: {
            required: true
        },
        d_f_otherchromosomal: {
            required: true
        },

        d_f_alpha_1: {
            required: true
        },
        d_f_bloom: {
            required: true
        },
        d_f_canavan: {
            required: true
        },
        d_f_cysticfibroses: {
            required: true
        },
        d_f_fabrydisease: {
            required: true
        },
        d_f_factorv: {
            required: true
        },
        d_f_familial: {
            required: true
        },
        d_f_familialfever: {
            required: true
        },
        d_f_fanconi: {
            required: true
        },
        d_f_hemophilia: {
            required: true
        },
        d_f_marfan: {
            required: true
        },
        d_f_mucolipidosis: {
            required: true
        },
        d_f_niemann: {
            required: true
        },
        d_f_sickle: {
            required: true
        },
        d_f_taysachs: {
            required: true
        },
        d_f_thallasmia: {
            required: true
        },
        d_f_blindness: {
            required: true
        },
        d_f_colorblind: {
            required: true
        },
        d_f_deafness: {
            required: true
        },
        d_f_albinism: {
            required: true
        },
        d_f_muscular: {
            required: true
        },
        d_f_galactosemia: {
            required: true
        },
        d_f_hurler: {
            required: true
        },
        d_f_other_genetic: {
            required: true
        },
        d_f_breast_cancer: {
            required: true
        },
        d_f_colon_cancer: {
            required: true
        },
        d_f_hereditary_non: {
            required: true
        },
        d_f_ovarian_cancer: {
            required: true
        },
        d_f_any_other_cancer: {
            required: true
        },
        d_f_alzheimer: {
            required: true
        },
        d_f_autism: {
            required: true
        },
        d_f_cerebral: {
            required: true
        },
        d_f_creultzfeldt: {
            required: true
        },
        d_f_depression: {
            required: true
        },
        d_f_gaucher: {
            required: true
        },
        d_f_huntington: {
            required: true
        },
        d_f_hydrocephalus: {
            required: true
        },
        d_f_obsessive_compulsive: {
            required: true
        },
        d_f_mania: {
            required: true
        },
        d_f_mental: {
            required: true
        },
        d_f_neurofibro: {
            required: true
        },
        d_f_schizo: {
            required: true
        },
        d_f_tourette: {
            required: true
        },
        d_f_tuberous: {
            required: true
        },
        d_f_wilson_disease: {
            required: true
        },
        d_f_multiple_sclerosis: {
            required: true
        },
        d_f_parkinson: {
            required: true
        },
        d_f_lou_gehrig: {
            required: true
        },
        d_f_any_other_neuro: {
            required: true
        },
        d_f_diabetes: {
            required: true
        },
        d_f_heart_disease: {
            required: true
        },
        d_f_high_blood: {
            required: true
        },
        d_f_asthma: {
            required: true
        },
        d_f_lupus: {
            required: true
        },
        d_f_obesity: {
            required: true
        },
        d_f_alcoholism: {
            required: true
        },
        d_f_infertility: {
            required: true
        },
        d_f_recurrent: {
            required: true
        },
        d_f_endometriosis: {
            required: true
        },
        d_f_polycystic_ovary: {
            required: true
        },
        d_f_uterine_fibroids: {
            required: true
        }

    },
    messages: {
        d_cleftlip: {
            required: "Required."
        },
        d_cleftpalate: {
            required: "Required."
        },
        d_congenitalhip: {
            required: "Required."
        },
        d_clubfoot: {
            required: "Required"
        },
        d_heartdefect: {
            required: "Required"
        },
        d_hearingproblems: {
            required: "Required."
        },
        d_spina: {
            required: "Required."
        },
        d_microcephaly: {
            required: "Required."
        },
        d_holoprosencephaly: {
            required: "Required."
        },
        d_babiesdiedatbirth: {
            required: "Required."
        },
        d_dwarfism: {
            required: "Required."
        },
        d_hypospadias: {
            required: "Required."
        },
        d_phenylketonuria: {
            required: "Required."
        },
        d_polycystickidney: {
            required: "Required."
        },
        d_pyloricstenosis: {
            required: "Required."
        },
        d_othercogenital: {
            required: "Required."
        },
        d_downsyndrome: {
            required: "Required."
        },
        d_fragilex: {
            required: "Required."
        },
        d_turnursyndrom: {
            required: "Required."
        },
        d_klinefelter: {
            required: "Required."
        },
        d_otherchromosomal: {
            required: "Required."
        },
        d_alpha_1: {
            required: "Required."
        },
        d_bloom: {
            required: "Required."
        },
        d_canavan: {
            required: "Required."
        },
        d_cysticfibroses: {
            required: "Required."
        },
        d_fabrydisease: {
            required: "Required."
        },
        d_factorv: {
            required: "Required."
        },
        d_familial: {
            required: "Required."
        },
        d_familialfever: {
            required: "Required."
        },
        d_fanconi: {
            required: "Required."
        },
        d_hemophilia: {
            required: "Required."
        },
        d_marfan: {
            required: "Required."
        },
        d_mucolipidosis: {
            required: "Required."
        },
        d_niemann: {
            required: "Required."
        },
        d_sickle: {
            required: "Required."
        },
        d_taysachs: {
            required: "Required."
        },
        d_thallasmia: {
            required: "Required."
        },
        d_blindness: {
            required: "Required."
        },
        d_deafness: {
            required: "Required."
        },
        d_albinism: {
            required: "Required."
        },
        d_muscular: {
            required: "Required."
        },
        d_galactosemia: {
            required: "Required."
        },
        d_hurler: {
            required: "Required."
        },
        d_other_genetic: {
            required: "Required."
        },
        d_breast_cancer: {
            required: "Required."
        },
        d_colon_cancer: {
            required: "Required."
        },
        d_hereditary_non: {
            required: "Required."
        },
        d_ovarian_cancer: {
            required: "Required."
        },
        d_any_other_cancer: {
            required: "Required."
        },
        d_alzheimer: {
            required: "Required."
        },
        d_autism: {
            required: "Required."
        },
        d_cerebral: {
            required: "Required."
        },
        d_creultzfeldt: {
            required: "Required."
        },
        d_depression: {
            required: "Required."
        },
        d_gaucher: {
            required: "Required."
        },
        d_huntington: {
            required: "Required."
        },
        d_hydrocephalus: {
            required: "Required."
        },
        d_obsessive_compulsive: {
            required: "Required."
        },
        d_mania: {
            required: "Required."
        },
        d_mental: {
            required: "Required."
        },
        d_neurofibro: {
            required: "Required."
        },
        d_schizo: {
            required: "Required."
        },
        d_tourette: {
            required: "Required."
        },
        d_tuberous: {
            required: "Required."
        },
        d_wilson_disease: {
            required: "Required."
        },
        d_multiple_sclerosis: {
            required: "Required."
        },
        d_parkinson: {
            required: "Required."
        },
        d_lou_gehrig: {
            required: "Required."
        },
        d_any_other_neuro: {
            required: "Required."
        },
        d_diabetes: {
            required: "Required."
        },
        d_heart_disease: {
            required: "Required."
        },
        d_high_blood: {
            required: "Required."
        },
        d_asthma: {
            required: "Required."
        },
        d_lupus: {
            required: "Required."
        },
        d_obesity: {
            required: "Required."
        },
        d_alcoholism: {
            required: "Required."
        },
        d_infertility: {
            required: "Required."
        },
        d_recurrent: {
            required: "Required."
        },
        d_endometriosis: {
            required: "Required."
        },
        d_polycystic_ovary: {
            required: "Required."
        },
        d_uterine_fibroids: {
            required: "Required."
        },
        d_f_cleftlip: {
            required: "Required."
        },
        d_f_cleftpalate: {
            required: "Required."
        },
        d_f_congenitalhip: {
            required: "Required."
        },
        d_f_clubfoot: {
            required: "Required."
        },
        d_f_heartdefect: {
            required: "Required."
        },
        d_f_hearingproblems: {
            required: "Required."
        },
        d_f_spina: {
            required: "Required."
        },
        d_f_microcephaly: {
            required: "Required."
        },
        d_f_holoprosencephaly: {
            required: "Required."
        },
        d_f_babiesdiedatbirth: {
            required: "Required."
        },
        d_f_dwarfism: {
            required: "Required."
        },
        d_f_hypospadias: {
            required: "Required."
        },
        d_f_phenylketonuria: {
            required: "Required."
        },
        d_f_polycystickidney: {
            required: "Required."
        },
        d_f_pyloricstenosis: {
            required: "Required."
        },
        d_f_othercogenital: {
            required: "Required."
        },
        d_f_downsyndrome: {
            required: "Required."
        },
        d_f_fragilex: {
            required: "Required."
        },
        d_f_turnursyndrom: {
            required: "Required."
        },
        d_f_klinefelter: {
            required: "Required."
        },
        d_f_otherchromosomal: {
            required: "Required."
        },

        d_f_alpha_1: {
            required: "Required."
        },
        d_f_bloom: {
            required: "Required."
        },
        d_f_canavan: {
            required: "Required."
        },
        d_f_cysticfibroses: {
            required: "Required."
        },
        d_f_fabrydisease: {
            required: "Required."
        },
        d_f_factorv: {
            required: "Required."
        },
        d_f_familial: {
            required: "Required."
        },
        d_f_familialfever: {
            required: "Required."
        },
        d_f_fanconi: {
            required: "Required."
        },
        d_f_hemophilia: {
            required: "Required."
        },
        d_f_marfan: {
            required: "Required."
        },
        d_f_mucolipidosis: {
            required: "Required."
        },
        d_f_niemann: {
            required: "Required."
        },
        d_f_sickle: {
            required: "Required."
        },
        d_f_taysachs: {
            required: "Required."
        },
        d_f_thallasmia: {
            required: "Required."
        },
        d_f_blindness: {
            required: "Required."
        },
        d_f_colorblind: {
            required: "Required."
        },
        d_f_deafness: {
            required: "Required."
        },
        d_f_albinism: {
            required: "Required."
        },
        d_f_muscular: {
            required: "Required."
        },
        d_f_galactosemia: {
            required: "Required."
        },
        d_f_hurler: {
            required: "Required."
        },
        d_f_other_genetic: {
            required: "Required."
        },
        d_f_breast_cancer: {
            required: "Required."
        },
        d_f_colon_cancer: {
            required: "Required."
        },
        d_f_hereditary_non: {
            required: "Required."
        },
        d_f_ovarian_cancer: {
            required: "Required."
        },
        d_f_any_other_cancer: {
            required: "Required."
        },
        d_f_alzheimer: {
            required: "Required."
        },
        d_f_autism: {
            required: "Required."
        },
        d_f_cerebral: {
            required: "Required."
        },
        d_f_creultzfeldt: {
            required: "Required."
        },
        d_f_depression: {
            required: "Required."
        },
        d_f_gaucher: {
            required: "Required."
        },
        d_f_huntington: {
            required: "Required."
        },
        d_f_hydrocephalus: {
            required: "Required."
        },
        d_f_obsessive_compulsive: {
            required: "Required."
        },
        d_f_mania: {
            required: "Required."
        },
        d_f_mental: {
            required: "Required."
        },
        d_f_neurofibro: {
            required: "Required."
        },
        d_f_schizo: {
            required: "Required."
        },
        d_f_tourette: {
            required: "Required."
        },
        d_f_tuberous: {
            required: "Required."
        },
        d_f_wilson_disease: {
            required: "Required."
        },
        d_f_multiple_sclerosis: {
            required: "Required."
        },
        d_f_parkinson: {
            required: "Required."
        },
        d_f_lou_gehrig: {
            required: "Required."
        },
        d_f_any_other_neuro: {
            required: "Required."
        },
        d_f_diabetes: {
            required: "Required."
        },
        d_f_heart_disease: {
            required: "Required."
        },
        d_f_high_blood: {
            required: "Required."
        },
        d_f_asthma: {
            required: "Required."
        },
        d_f_lupus: {
            required: "Required."
        },
        d_f_obesity: {
            required: "Required."
        },
        d_f_alcoholism: {
            required: "Required."
        },
        d_f_infertility: {
            required: "Required."
        },
        d_f_recurrent: {
            required: "Required."
        },
        d_f_endometriosis: {
            required: "Required."
        },
        d_f_polycystic_ovary: {
            required: "Required."
        },
        d_f_uterine_fibroids: {
            required: "Required."
        }
    },
    submitHandler: function () {
        if ($('#step8').valid()) {
            $('#donor_q_next').click();
        }
    }
});

$body.on("change", "#d_cleftlip, #d_f_cleftlip", function () {
    if ($(this).val() !== "No") {
        $('#i_cleftlip').rules("add", {
            required: true
        });
    } else {
        $('#i_cleftlip').rules("remove");
    }
});
$body.on("change", "#d_cleftpalate, #d_f_cleftpalate", function () {
    if ($(this).val() !== "No") {
        $('#i_cleftpalate').rules("add", {
            required: true
        });
    } else {
        $('#i_cleftpalate').rules("remove");
    }
});
$body.on("change", "#d_congenitalhip, #d_f_congenitalhip", function () {
    if ($(this).val() !== "No") {
        $('#i_congenitalhip').rules("add", {
            required: true
        });
    } else {
        $('#i_congenitalhip').rules("remove");
    }
});
$body.on("change", "#d_clubfoot, #d_f_clubfoot", function () {
    if ($(this).val() !== "No") {
        $('#i_clubfoot').rules("add", {
            required: true
        });
    } else {
        $('#i_clubfoot').rules("remove");
    }
});
$body.on("change", "#d_heartdefect, #d_f_heartdefect", function () {
    if ($(this).val() !== "No") {
        $('#i_heartdefect').rules("add", {
            required: true
        });
    } else {
        $('#i_heartdefect').rules("remove");
    }
});
$body.on("change", "#d_hearingproblems, #d_f_hearingproblems", function () {
    if ($(this).val() !== "No") {
        $('#i_hearingproblems').rules("add", {
            required: true
        });
    } else {
        $('#i_hearingproblems').rules("remove");
    }
});
$body.on("change", "#d_spina, #d_f_spina", function () {
    if ($(this).val() !== "No") {
        $('#i_spina').rules("add", {
            required: true
        });
    } else {
        $('#i_spina').rules("remove");
    }
});
$body.on("change", "#d_microcephaly, #d_f_microcephaly", function () {
    if ($(this).val() !== "No") {
        $('#i_microcephaly').rules("add", {
            required: true
        });
    } else {
        $('#i_microcephaly').rules("remove");
    }
});
$body.on("change", "#d_holoprosencephaly, #d_f_holoprosencephaly", function () {
    if ($(this).val() !== "No") {
        $('#i_holoprosencephaly').rules("add", {
            required: true
        });
    } else {
        $('#i_holoprosencephaly').rules("remove");
    }
});
$body.on("change", "#d_babiesdiedatbirth, #d_f_babiesdiedatbirth", function () {
    if ($(this).val() !== "No") {
        $('#i_babiesdiedatbirth').rules("add", {
            required: true
        });
    } else {
        $('#i_babiesdiedatbirth').rules("remove");
    }
});
$body.on("change", "#d_dwarfism, #d_f_dwarfism", function () {
    if ($(this).val() !== "No") {
        $('#i_dwarfism').rules("add", {
            required: true
        });
    } else {
        $('#i_dwarfism').rules("remove");
    }
});
$body.on("change", "#d_hypospadias, #d_f_hypospadias", function () {
    if ($(this).val() !== "No") {
        $('#i_hypospadias').rules("add", {
            required: true
        });
    } else {
        $('#i_hypospadias').rules("remove");
    }
});
$body.on("change", "#d_phenylketonuria, #d_f_phenylketonuria", function () {
    if ($(this).val() !== "No") {
        $('#i_phenylketonuria').rules("add", {
            required: true
        });
    } else {
        $('#i_phenylketonuria').rules("remove");
    }
});
$body.on("change", "#d_polycystickidney, #d_f_polycystickidney", function () {
    if ($(this).val() !== "No") {
        $('#i_polycystickidney').rules("add", {
            required: true
        });
    } else {
        $('#i_polycystickidney').rules("remove");
    }
});
$body.on("change", "#d_pyloricstenosis, #d_f_pyloricstenosis", function () {
    if ($(this).val() !== "No") {
        $('#i_pyloricstenosis').rules("add", {
            required: true
        });
    } else {
        $('#i_pyloricstenosis').rules("remove");
    }
});
$body.on("change", "#d_othercogenital, #d_f_othercogenital", function () {
    if ($(this).val() !== "No") {
        $('#i_othercogenital').rules("add", {
            required: true
        });
    } else {
        $('#i_othercogenital').rules("remove");
    }
});
$body.on("change", "#d_downsyndrome, #d_f_downsyndrome", function () {
    if ($(this).val() !== "No") {
        $('#i_downsyndrome').rules("add", {
            required: true
        });
    } else {
        $('#i_downsyndrome').rules("remove");
    }
});
$body.on("change", "#d_fragilex, #d_f_fragilex", function () {
    if ($(this).val() !== "No") {
        $('#i_fragilex').rules("add", {
            required: true
        });
    } else {
        $('#i_fragilex').rules("remove");
    }
});
$body.on("change", "#d_turnursyndrom, #d_f_turnursyndrom", function () {
    if ($(this).val() !== "No") {
        $('#i_turnursyndrom').rules("add", {
            required: true
        });
    } else {
        $('#i_turnursyndrom').rules("remove");
    }
});
$body.on("change", "#d_klinefelter, #d_f_klinefelter", function () {
    if ($(this).val() !== "No") {
        $('#i_klinefelter').rules("add", {
            required: true
        });
    } else {
        $('#i_klinefelter').rules("remove");
    }
});
$body.on("change", "#d_otherchromosomal, #d_f_otherchromosomal", function () {
    if ($(this).val() !== "No") {
        $('#i_otherchromosomal').rules("add", {
            required: true
        });
    } else {
        $('#i_otherchromosomal').rules("remove");
    }
});
$body.on("change", "#d_alpha_1, #d_f_alpha_1", function () {
    if ($(this).val() !== "No") {
        $('#i_alpha_1').rules("add", {
            required: true
        });
    } else {
        $('#i_alpha_1').rules("remove");
    }
});
$body.on("change", "#d_bloom, #d_f_bloom", function () {
    if ($(this).val() !== "No") {
        $('#i_bloom').rules("add", {
            required: true
        });
    } else {
        $('#i_bloom').rules("remove");
    }
});
$body.on("change", "#d_canavan, #d_f_canavan", function () {
    if ($(this).val() !== "No") {
        $('#i_canavan').rules("add", {
            required: true
        });
    } else {
        $('#i_canavan').rules("remove");
    }
});
$body.on("change", "#d_cysticfibroses, #d_f_cysticfibroses", function () {
    if ($(this).val() !== "No") {
        $('#i_cysticfibroses').rules("add", {
            required: true
        });
    } else {
        $('#i_cysticfibroses').rules("remove");
    }
});
$body.on("change", "#d_fabrydisease, #d_f_fabrydisease", function () {
    if ($(this).val() !== "No") {
        $('#i_fabrydisease').rules("add", {
            required: true
        });
    } else {
        $('#i_fabrydisease').rules("remove");
    }
});
$body.on("change", "#d_factorv, #d_f_factorv", function () {
    if ($(this).val() !== "No") {
        $('#i_factorv').rules("add", {
            required: true
        });
    } else {
        $('#i_factorv').rules("remove");
    }
});
$body.on("change", "#d_familial, #d_f_familial", function () {
    if ($(this).val() !== "No") {
        $('#i_familial').rules("add", {
            required: true
        });
    } else {
        $('#i_familial').rules("remove");
    }
});
$body.on("change", "#d_familialfever, #d_f_familialfever", function () {
    if ($(this).val() !== "No") {
        $('#i_familialfever').rules("add", {
            required: true
        });
    } else {
        $('#i_familialfever').rules("remove");
    }
});
$body.on("change", "#d_fanconi, #d_f_fanconi", function () {
    if ($(this).val() !== "No") {
        $('#i_fanconi').rules("add", {
            required: true
        });
    } else {
        $('#i_fanconi').rules("remove");
    }
});
$body.on("change", "#d_hemophilia, #d_f_hemophilia", function () {
    if ($(this).val() !== "No") {
        $('#i_hemophilia').rules("add", {
            required: true
        });
    } else {
        $('#i_hemophilia').rules("remove");
    }
});
$body.on("change", "#d_marfan, #d_f_marfan", function () {
    if ($(this).val() !== "No") {
        $('#i_marfan').rules("add", {
            required: true
        });
    } else {
        $('#i_marfan').rules("remove");
    }
});
$body.on("change", "#d_mucolipidosis, #d_f_mucolipidosis", function () {
    if ($(this).val() !== "No") {
        $('#i_mucolipidosis').rules("add", {
            required: true
        });
    } else {
        $('#i_mucolipidosis').rules("remove");
    }
});
$body.on("change", "#d_niemann, #d_f_niemann", function () {
    if ($(this).val() !== "No") {
        $('#i_niemann').rules("add", {
            required: true
        });
    } else {
        $('#i_niemann').rules("remove");
    }
});
$body.on("change", "#d_sickle, #d_f_sickle", function () {
    if ($(this).val() !== "No") {
        $('#i_sickle').rules("add", {
            required: true
        });
    } else {
        $('#i_sickle').rules("remove");
    }
});
$body.on("change", "#d_taysachs, #d_f_taysachs", function () {
    if ($(this).val() !== "No") {
        $('#i_taysachs').rules("add", {
            required: true
        });
    } else {
        $('#i_taysachs').rules("remove");
    }
});
$body.on("change", "#d_thallasmia, #d_f_thallasmia", function () {
    if ($(this).val() !== "No") {
        $('#i_thallasmia').rules("add", {
            required: true
        });
    } else {
        $('#i_thallasmia').rules("remove");
    }
});
$body.on("change", "#d_blindness, #d_f_blindness", function () {
    if ($(this).val() !== "No") {
        $('#i_blindness').rules("add", {
            required: true
        });
    } else {
        $('#i_blindness').rules("remove");
    }
});
$body.on("change", "#d_colorblind, #d_f_colorblind", function () {
    if ($(this).val() !== "No") {
        $('#i_colorblind').rules("add", {
            required: true
        });
    } else {
        $('#i_colorblind').rules("remove");
    }
});
$body.on("change", "#d_deafness, #d_f_deafness", function () {
    if ($(this).val() !== "No") {
        $('#i_deafness').rules("add", {
            required: true
        });
    } else {
        $('#i_deafness').rules("remove");
    }
});
$body.on("change", "#d_albinism, #d_f_albinism", function () {
    if ($(this).val() !== "No") {
        $('#i_albinism').rules("add", {
            required: true
        });
    } else {
        $('#i_albinism').rules("remove");
    }
});
$body.on("change", "#d_muscular, #d_f_muscular", function () {
    if ($(this).val() !== "No") {
        $('#i_muscular').rules("add", {
            required: true
        });
    } else {
        $('#i_muscular').rules("remove");
    }
});
$body.on("change", "#d_galactosemia, #d_f_galactosemia", function () {
    if ($(this).val() !== "No") {
        $('#i_galactosemia').rules("add", {
            required: true
        });
    } else {
        $('#i_galactosemia').rules("remove");
    }
});
$body.on("change", "#d_hurler, #d_f_hurler", function () {
    if ($(this).val() !== "No") {
        $('#i_hurler').rules("add", {
            required: true
        });
    } else {
        $('#i_hurler').rules("remove");
    }
});
$body.on("change", "#d_other_genetic, #d_f_other_genetic", function () {
    if ($(this).val() !== "No") {
        $('#i_other_genetic').rules("add", {
            required: true
        });
    } else {
        $('#i_other_genetic').rules("remove");
    }
});
$body.on("change", "#d_breast_cancer, #d_f_breast_cancer", function () {
    if ($(this).val() !== "No") {
        $('#i_breast_cancer').rules("add", {
            required: true
        });
    } else {
        $('#i_breast_cancer').rules("remove");
    }
});
$body.on("change", "#d_colon_cancer, #d_f_colon_cancer", function () {
    if ($(this).val() !== "No") {
        $('#i_colon_cancer').rules("add", {
            required: true
        });
    } else {
        $('#i_colon_cancer').rules("remove");
    }
});
$body.on("change", "#d_hereditary_non, #d_f_hereditary_non", function () {
    if ($(this).val() !== "No") {
        $('#i_hereditary_non').rules("add", {
            required: true
        });
    } else {
        $('#i_hereditary_non').rules("remove");
    }
});
$body.on("change", "#d_ovarian_cancer, #d_f_ovarian_cancer", function () {
    if ($(this).val() !== "No") {
        $('#i_ovarian_cancer').rules("add", {
            required: true
        });
    } else {
        $('#i_ovarian_cancer').rules("remove");
    }
});
$body.on("change", "#d_any_other_cancer, #d_f_any_other_cancer", function () {
    if ($(this).val() !== "No") {
        $('#i_any_other_cancer').rules("add", {
            required: true
        });
    } else {
        $('#i_any_other_cancer').rules("remove");
    }
});
$body.on("change", "#d_alzheimer, #d_f_alzheimer", function () {
    if ($(this).val() !== "No") {
        $('#i_alzheimer').rules("add", {
            required: true
        });
    } else {
        $('#i_alzheimer').rules("remove");
    }
});
$body.on("change", "#d_autism, #d_f_autism", function () {
    if ($(this).val() !== "No") {
        $('#i_autism').rules("add", {
            required: true
        });
    } else {
        $('#i_autism').rules("remove");
    }
});
$body.on("change", "#d_cerebral, #d_f_cerebral", function () {
    if ($(this).val() !== "No") {
        $('#i_cerebral').rules("add", {
            required: true
        });
    } else {
        $('#i_cerebral').rules("remove");
    }
});
$body.on("change", "#d_creultzfeldt, #d_f_creultzfeldt", function () {
    if ($(this).val() !== "No") {
        $('#i_creultzfeldt').rules("add", {
            required: true
        });
    } else {
        $('#i_creultzfeldt').rules("remove");
    }
});
$body.on("change", "#d_depression, #d_f_depression", function () {
    if ($(this).val() !== "No") {
        $('#i_depression').rules("add", {
            required: true
        });
    } else {
        $('#i_depression').rules("remove");
    }
});
$body.on("change", "#d_gaucher, #d_f_gaucher", function () {
    if ($(this).val() !== "No") {
        $('#i_gaucher').rules("add", {
            required: true
        });
    } else {
        $('#i_gaucher').rules("remove");
    }
});
$body.on("change", "#d_huntington, #d_f_huntington", function () {
    if ($(this).val() !== "No") {
        $('#i_huntington').rules("add", {
            required: true
        });
    } else {
        $('#i_huntington').rules("remove");
    }
});
$body.on("change", "#d_hydrocephalus, #d_f_hydrocephalus", function () {
    if ($(this).val() !== "No") {
        $('#i_hydrocephalus').rules("add", {
            required: true
        });
    } else {
        $('#i_hydrocephalus').rules("remove");
    }
});
$body.on("change", "#d_obsessive_compulsive, #d_f_obsessive_compulsive", function () {
    if ($(this).val() !== "No") {
        $('#i_obsessive_compulsive').rules("add", {
            required: true
        });
    } else {
        $('#i_obsessive_compulsive').rules("remove");
    }
});
$body.on("change", "#d_mania, #d_f_mania", function () {
    if ($(this).val() !== "No") {
        $('#i_mania').rules("add", {
            required: true
        });
    } else {
        $('#i_mania').rules("remove");
    }
});
$body.on("change", "#d_neurofibro, #d_f_neurofibro", function () {
    if ($(this).val() !== "No") {
        $('#i_neurofibro').rules("add", {
            required: true
        });
    } else {
        $('#i_neurofibro').rules("remove");
    }
});
$body.on("change", "#d_schizo, #d_f_schizo", function () {
    if ($(this).val() !== "No") {
        $('#i_schizo').rules("add", {
            required: true
        });
    } else {
        $('#i_schizo').rules("remove");
    }
});
$body.on("change", "#d_tourette, #d_f_tourette", function () {
    if ($(this).val() !== "No") {
        $('#i_tourette').rules("add", {
            required: true
        });
    } else {
        $('#i_tourette').rules("remove");
    }
});
$body.on("change", "#d_tuberous, #d_f_tuberous", function () {
    if ($(this).val() !== "No") {
        $('#i_tuberous').rules("add", {
            required: true
        });
    } else {
        $('#i_tuberous').rules("remove");
    }
});
$body.on("change", "#d_wilson_disease, #d_f_wilson_disease", function () {
    if ($(this).val() !== "No") {
        $('#i_wilson_disease').rules("add", {
            required: true
        });
    } else {
        $('#i_wilson_disease').rules("remove");
    }
});
$body.on("change", "#d_multiple_sclerosis, #d_f_multiple_sclerosis", function () {
    if ($(this).val() !== "No") {
        $('#i_multiple_sclerosis').rules("add", {
            required: true
        });
    } else {
        $('#i_multiple_sclerosis').rules("remove");
    }
});
$body.on("change", "#d_parkinson, #d_f_parkinson", function () {
    if ($(this).val() !== "No") {
        $('#i_parkinson').rules("add", {
            required: true
        });
    } else {
        $('#i_parkinson').rules("remove");
    }
});
$body.on("change", "#d_lou_gehrig, #d_f_lou_gehrig", function () {
    if ($(this).val() !== "No") {
        $('#i_lou_gehrig').rules("add", {
            required: true
        });
    } else {
        $('#i_lou_gehrig').rules("remove");
    }
});
$body.on("change", "#d_any_other_neuro, #d_f_any_other_neuro", function () {
    if ($(this).val() !== "No") {
        $('#i_any_other_neuro').rules("add", {
            required: true
        });
    } else {
        $('#i_any_other_neuro').rules("remove");
    }
});
$body.on("change", "#d_diabetes, #d_f_diabetes", function () {
    if ($(this).val() !== "No") {
        $('#i_diabetes').rules("add", {
            required: true
        });
    } else {
        $('#i_diabetes').rules("remove");
    }
});
$body.on("change", "#d_heart_disease, #d_f_heart_disease", function () {
    if ($(this).val() !== "No") {
        $('#i_heart_disease').rules("add", {
            required: true
        });
    } else {
        $('#i_heart_disease').rules("remove");
    }
});
$body.on("change", "#d_high_blood, #d_f_high_blood", function () {
    if ($(this).val() !== "No") {
        $('#i_high_blood').rules("add", {
            required: true
        });
    } else {
        $('#i_high_blood').rules("remove");
    }
});
$body.on("change", "#d_asthma, #d_f_asthma", function () {
    if ($(this).val() !== "No") {
        $('#i_asthma').rules("add", {
            required: true
        });
    } else {
        $('#i_asthma').rules("remove");
    }
});
$body.on("change", "#d_lupus, #d_f_lupus", function () {
    if ($(this).val() !== "No") {
        $('#i_lupus').rules("add", {
            required: true
        });
    } else {
        $('#i_lupus').rules("remove");
    }
});
$body.on("change", "#d_obesity, #d_f_obesity", function () {
    if ($(this).val() !== "No") {
        $('#i_obesity').rules("add", {
            required: true
        });
    } else {
        $('#i_obesity').rules("remove");
    }
});
$body.on("change", "#d_alcoholism, #d_f_alcoholism", function () {
    if ($(this).val() !== "No") {
        $('#i_alcoholism').rules("add", {
            required: true
        });
    } else {
        $('#i_alcoholism').rules("remove");
    }
});
$body.on("change", "#d_infertility, #d_f_infertility", function () {
    if ($(this).val() !== "No") {
        $('#i_infertility').rules("add", {
            required: true
        });
    } else {
        $('#i_infertility').rules("remove");
    }
});
$body.on("change", "#d_recurrent, #d_f_recurrent", function () {
    if ($(this).val() !== "No") {
        $('#i_recurrent').rules("add", {
            required: true
        });
    } else {
        $('#i_recurrent').rules("remove");
    }
});
$body.on("change", "#d_endometriosis, #d_f_endometriosis", function () {
    if ($(this).val() !== "No") {
        $('#i_endometriosis').rules("add", {
            required: true
        });
    } else {
        $('#i_endometriosis').rules("remove");
    }
});
$body.on("change", "#d_polycystic_ovary, #d_f_polycystic_ovary", function () {
    if ($(this).val() !== "No") {
        $('#i_polycystic_ovary').rules("add", {
            required: true
        });
    } else {
        $('#i_polycystic_ovary').rules("remove");
    }
});
$body.on("change", "#d_uterine_fibroids, #d_f_uterine_fibroids", function () {
    if ($(this).val() !== "No") {
        $('#i_uterine_fibroids').rules("add", {
            required: true
        });
    } else {
        $('#i_uterine_fibroids').rules("remove");
    }
});


// Step 9

validator = $('#step9').validate({
    rules: {
        d_aids: {
            required: true
        },
        d_herpes: {
            required: true
        },
        d_gonorrhea: {
            required: true
        },
        d_chlamydia: {
            required: true
        },
        d_condyloma: {
            required: true
        },
        d_syphilis: {
            required: true
        },
        d_pid: {
            required: true
        },
        d_hepatitisB: {
            required: true
        },
        d_hepatitisC: {
            required: true
        },
        d_tuberculosis: {
            required: true
        },
        d_allergies: {
            required: true
        },
        d_allergiesLatex: {
            required: true
        },
        d_previousSurgery: {
            required: true
        },
        d_emotional: {
            required: true
        },
        d_psychologist: {
            required: true
        },
        d_antiAnxiety: {
            required: true
        }
    },
    messages: {
        d_aids: {
            required: "Required."
        },
        d_herpes: {
            required: "Required."
        },
        d_gonorrhea: {
            required: "Required."
        },
        d_chlamydia: {
            required: "Required."
        },
        d_condyloma: {
            required: "Required."
        },
        d_syphilis: {
            required: "Required."
        },
        d_pid: {
            required: "Required."
        },
        d_hepatitisB: {
            required: "Required."
        },
        d_hepatitisC: {
            required: "Required."
        },
        d_tuberculosis: {
            required: "Required."
        },
        d_allergies: {
            required: "Required."
        },
        d_allergiesLatex: {
            required: "Required."
        },
        d_previousSurgery: {
            required: "Required."
        },
        d_emotional: {
            required: "Required."
        },
        d_psychologist: {
            required: "Required."
        },
        d_antiAnxiety: {
            required: "Required."
        }
    },
    submitHandler: function () {
        if ($('#step9').valid()) {
            $('#donor_q_next').click();
        }
    }
});

$body.on("change", "#d_aids", function () {
    if ($(this).val() !== "No") {
        $('#i_aids').rules("add", {
            required: true
        });
    } else {
        $('#i_aids').rules("remove");
    }
});
$body.on("change", "#d_herpes", function () {
    if ($(this).val() !== "No") {
        $('#i_herpes').rules("add", {
            required: true
        });
    } else {
        $('#i_herpes').rules("remove");
    }
});
$body.on("change", "#d_gonorrhea", function () {
    if ($(this).val() !== "No") {
        $('#i_gonorrhea').rules("add", {
            required: true
        });
    } else {
        $('#i_gonorrhea').rules("remove");
    }
});
$body.on("change", "#d_chlamydia", function () {
    if ($(this).val() !== "No") {
        $('#i_chlamydia').rules("add", {
            required: true
        });
    } else {
        $('#i_chlamydia').rules("remove");
    }
});
$body.on("change", "#d_condyloma", function () {
    if ($(this).val() !== "No") {
        $('#i_condyloma').rules("add", {
            required: true
        });
    } else {
        $('#i_condyloma').rules("remove");
    }
});
$body.on("change", "#d_syphilis", function () {
    if ($(this).val() !== "No") {
        $('#i_syphilis').rules("add", {
            required: true
        });
    } else {
        $('#i_syphilis').rules("remove");
    }
});
$body.on("change", "#d_pid", function () {
    if ($(this).val() !== "No") {
        $('#i_pid').rules("add", {
            required: true
        });
    } else {
        $('#i_pid').rules("remove");
    }
});
$body.on("change", "#d_hepatitisB", function () {
    if ($(this).val() !== "No") {
        $('#i_hepatitisB').rules("add", {
            required: true
        });
    } else {
        $('#i_hepatitisB').rules("remove");
    }
});
$body.on("change", "#d_hepatitisC", function () {
    if ($(this).val() !== "No") {
        $('#i_hepatitisC').rules("add", {
            required: true
        });
    } else {
        $('#i_hepatitisC').rules("remove");
    }
});
$body.on("change", "#d_tuberculosis", function () {
    if ($(this).val() !== "No") {
        $('#i_tuberculosis').rules("add", {
            required: true
        });
    } else {
        $('#i_tuberculosis').rules("remove");
    }
});
$body.on("change", "#d_allergies", function () {
    if ($(this).val() !== "No") {
        $('#i_allergies').rules("add", {
            required: true
        });
    } else {
        $('#i_allergies').rules("remove");
    }
});
$body.on("change", "#d_allergiesLatex", function () {
    if ($(this).val() !== "No") {
        $('#i_allergiesLatex').rules("add", {
            required: true
        });
    } else {
        $('#i_allergiesLatex').rules("remove");
    }
});
$body.on("change", "#d_previousSurgery", function () {
    if ($(this).val() !== "No") {
        $('#i_previousSurgery').rules("add", {
            required: true
        });
    } else {
        $('#i_previousSurgery').rules("remove");
    }
});

$body.on("change", "#d_emotional, #d_psychologist, #d_antiAnxiety", function () {
    if ($(this).val() !== "No") {
        $('#if_y_p_e').rules("add", {
            required: true
        });
    } else {
        $('#if_y_p_e').rules("remove");
    }
});


// step 10 ----------------------


validator = $('#step10').validate({
    rules: {
        i_height: {
            required: true
        },
        i_weight: {
            required: true
        },
        i_race: {
            required: true
        },
        i_home_phone: {
            required: true
        },
        i_mother: {
            required: true
        },
        i_maternal_grandmother: {
            required: true
        },
        i_maternal_grandfather: {
            required: true
        },
        i_father: {
            required: true
        },
        i_paternal_grandmother: {
            required: true
        },
        i_paternal_grandfather: {
            required: true
        },
        i_religion: {
            required: true
        },
        d_adopted: {
            required: true
        },
        d_weight_gain_loss: {
            required: true
        },
        d_dexterity: {
            required: true
        },
        d_boneStructure: {
            required: true
        },
        d_complexion: {
            required: true
        },
        d_tanAbility: {
            required: true
        },
        d_skinCondition: {
            required: true
        },
        d_dimples: {
            required: true
        },
        d_eyecolor: {
            required: true
        },
        d_eyesize: {
            required: true
        },
        d_eyeShape: {
            required: true
        },
        d_haircolor: {
            required: true
        },
        d_hairType: {
            required: true
        },
        d_hairtexture: {
            required: true
        },
        d_hairfulness: {
            required: true
        },
        d_baldness: {
            required: true
        },
        d_baldnessinfamily: {
            required: true
        },
        d_prematureGraying: {
            required: true
        },
        d_bodyfacialfeatures: {
            required: true
        },
        d_teethcondition: {
            required: true
        },
        d_periodonalword: {
            required: true
        },
        d_hearing: {
            required: true
        },
        d_vision: {
            required: true
        },
        d_glassesCorrective: {
            required: true
        },
        d_stigmatism: {
            required: true
        },
        i_detail_self: {
            required: true
        },
        d_is_it_ok: {
            required: true
        },
        c_egg_don_reason: {
            required: true
        }
    },
    messages: {
        i_height: {
            required: "Required."
        },
        i_weight: {
            required: "Required."
        },
        i_race: {
            required: "Required."
        },
        i_home_phone: {
            required: "Required."
        },
        i_mother: {
            required: "Required."
        },
        i_maternal_grandmother: {
            required: "Required."
        },
        i_maternal_grandfather: {
            required: "Required."
        },
        i_father: {
            required: "Required."
        },
        i_paternal_grandmother: {
            required: "Required."
        },
        i_paternal_grandfather: {
            required: "Required."
        },
        i_religion: {
            required: "Required."
        },
        d_adopted: {
            required: "Required."
        },
        d_weight_gain_loss: {
            required: "Required."
        },
        d_dexterity: {
            required: "Required."
        },
        d_boneStructure: {
            required: "Required."
        },
        d_complexion: {
            required: "Required."
        },
        d_tanAbility: {
            required: "Required."
        },
        d_skinCondition: {
            required: "Required."
        },
        d_dimples: {
            required: "Required."
        },
        d_eyecolor: {
            required: "Required."
        },
        d_eyesize: {
            required: "Required."
        },
        d_eyeShape: {
            required: "Required."
        },
        d_haircolor: {
            required: "Required."
        },
        d_hairType: {
            required: "Required."
        },
        d_hairtexture: {
            required: "Required."
        },
        d_hairfulness: {
            required: "Required."
        },
        d_baldness: {
            required: "Required."
        },
        d_baldnessinfamily: {
            required: "Required."
        },
        d_prematureGraying: {
            required: "Required."
        },
        d_bodyfacialfeatures: {
            required: "Required."
        },
        d_teethcondition: {
            required: "Required."
        },
        d_periodonalword: {
            required: "Required."
        },
        d_hearing: {
            required: "Required."
        },
        d_vision: {
            required: "Required."
        },
        d_glassesCorrective: {
            required: "Required."
        },
        d_stigmatism: {
            required: "Required."
        },
        i_detail_self: {
            required: "Required."
        },
        d_is_it_ok: {
            required: "Required."
        },
        c_egg_don_reason: {
            required: "Required."
        }
    },
    submitHandler: function () {
        if ($('#step10').valid()) {

        }
    }
});


$body.on("change", "#d_weight_gain_loss", function () {
    if ($(this).val() !== "No") {
        $('#i_weight_gain_loss').rules("add", {
            required: true
        });
    } else {
        $('#i_weight_gain_loss').rules("remove");
    }
});
$body.on("change", "#d_prematureGraying", function () {
    if ($(this).val() !== "No") {
        $('#i_prematureGraying').rules("add", {
            required: true
        });
    } else {
        $('#i_prematureGraying').rules("remove");
    }
});
$body.on("change", "#d_periodonalword", function () {
    if ($(this).val() !== "No") {
        $('#i_periodonalword').rules("add", {
            required: true
        });
    } else {
        $('#i_periodonalword').rules("remove");
    }
});
$body.on("change", "#d_glassesCorrective", function () {
    if ($(this).val() !== "No") {
        $('#i_glassesCorrective').rules("add", {
            required: true
        });
    } else {
        $('#i_glassesCorrective').rules("remove");
    }
});
$body.on("change", "#d_stigmatism", function () {
    if ($(this).val() !== "No") {
        $('#i_stigmatism').rules("add", {
            required: true
        });
    } else {
        $('#i_stigmatism').rules("remove");
    }
});


// });