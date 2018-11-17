<?php



$host = getenv('IP');

$username = getenv('C9_USER');

$password = '';

$dbname = 'world';



$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

//Added to obtain the values of the get requst variable
$country =$_GET['country'];
$everything =$_GET['everything'];

if($aeverything =='true') {
	$stmt = $conn->query("SELECT * FROM countries");
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
else {
	$stmt =$conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}




echo '<ul>';

foreach ($results as $row) {

  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';

}

echo '</ul>';