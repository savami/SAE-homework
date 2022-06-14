<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        .error {color: red}
    </style>

    <title>Job Application Form</title>
</head>
<body>

<?php
$firstnameErr = $lastnameErr = $emailErr = $genderErr = $languageErr = "";
$firstname = $lastname = $email = $gender = $about = "";

if (empty($_POST["firstname"])) {
    $firstnameErr = "First name is required";
} else {
    $firstname = test_input($_POST["firstname"]);
    if (!preg_match("/^[a-zA-Z-' ]*$/",$firstname)) {
        $nameErr = "Only letters and white space allowed";
    }
}

if (empty($_POST["lastname"])) {
    $lastnameErr = "Last name is required";
} else {
    $lastname = test_input($_POST["lastname"]);
    if (!preg_match("/^[a-zA-Z-' ]*$/",$lastnameErr)) {
        $lastnameErr = "Only letters and white space allowed";
    }
}

if (empty($_POST["email"])) {
    $emailErr = "E-mail address is required";
} else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
    }
}

if(empty($_POST["gender"])) {
    $genderErr = "Gender is required";
    } else {
    $gender = test_input($_POST["gender"]);
}

if (empty($_POST["about"])) {
    $about = "";
} else {
    $about = test_input($_POST["about"]);
}

$language = $_POST["language"];
if (empty($language)) {
    $languageErr = "Select at least 1 language";
}
$N = count($language);



function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>
    <div class="container">
        <h2>Job Application Form</h2>
        <p class="error">Required field</p>
        <form method="POST">
            <label for="firstname">First Name: </label>
            <input type="text" name="firstname" id="firstname" placeholder="Enter first name" value="<?php echo $firstname;?>">
            <span class="error"> * <?php echo $firstnameErr?></span>
            <br>
            <label for="lastname">Last Name: </label>
            <input type="text" name="lastname" id="lastname" placeholder="Enter last name" value="<?php echo $lastname;?>">
            <span class="error"> * <?php echo $lastnameErr?></span>
            <br>
            <label for="email">E-mail: </label>
            <input type="email" name="email" id="email" placeholder="Enter e-mail address" value="<?php echo $email;?>">
            <span class="error"> * <?php echo $emailErr?></span>
            <br>
            <label for="gender">Gender: </label>
            <input type="radio" name="gender" id="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?> value="male"> Male
            <input type="radio" name="gender" id="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female"> Female
            <span class="error"> * <?php echo $genderErr?></span>
            <br>
            <label for="language">Spoken Languages: </label>
            <input type="checkbox" name="language[]" id="language" value="English"> English
            <input type="checkbox" name="language[]" id="language" value="Serbian"> Serbian
            <input type="checkbox" name="language[]" id="language" value="Dutch"> Dutch
            <input type="checkbox" name="language[]" id="language" value="German"> German
            <input type="checkbox" name="language[]" id="language" value="French"> French
            <input type="checkbox" name="language[]" id="language" value="Other"> Other
            <span class="error"> * <?php echo $languageErr?></span>
            <br>
            <br>
            <label for="about">About yourself</label>
            <br>
            <textarea name="about" id="about" cols="30" rows="10"></textarea>
            <br>
            <br>
            <button>Submit</button>
        </form>
        <hr>
    </div>

<?php
echo '<div class="container">';
echo "<h2>Your Input:</h2>";
echo $firstname;
echo "<br>";
echo $lastname;
echo "<br>";
echo $email;
echo "<br>";
echo $gender;
echo "<br>";
for ($i=0; $i < $N; $i++) {echo ($language[$i] . " ");}
echo "<br>";
echo $about;
echo "</div>"
?>
</body>
</html>