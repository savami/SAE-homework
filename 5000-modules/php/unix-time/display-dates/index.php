<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>Date</th>
            <th>Day</th>
        </tr>
        <?php for ($i= 0; $i < 16; $i++) : ?>
        <tr>
            <td><?= date('d. F Y', strtotime("1st March 2022 Monday +$i week")) ?><br></td>

            <td>Monday</td>
        </tr>

        <tr>
            <td><?= date('d. F Y', strtotime("1st March 2022 Monday +$i week")) ?><br></td>

            <td>Wednesday</td>
        </tr>
        <?php endfor;?>
    </table>
</body>
</html>