<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Weather</title>
    <style>
        div { text-align: center; }
    </style>
</head>
<body>
<?php $month = date("F"); ?>
<?php if($month == "May"): ?>

    <div>
        <h1>It's <?= $month ?> and it's so hot outside!</h1>
        <img src="https://www.treehugger.com/thmb/_lhgtC-6L7fxeumvXVjCIKRODlI=/1000x664/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg" alt="Palm Trees and sunny weather" title="Hot Weather">
    </div>

<?php else: ?>

    <div>
        <h1>It's not May, and it's very cold outside :(</h1>
        <img src="https://i.insider.com/5a53d0c4ec1ade0e533fe907?width=700" alt="Guy freezing outside due to cold weather" title="Cold weather">
    </div>

<?php endif; ?>
</body>
</html>