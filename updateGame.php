<?php 
$gamename = 'captionary-update';
include('../../includes/updateGamePre.php');   
if(isset($_POST['hosting_game'])){
	if($_POST['random']){
		$sql = "SELECT * FROM `$gamename` WHERE `game_code` = '$gamecode'";
	    $result = $mysqli->query($sql);
		$results = NULL;
		while($results[] = $result->fetch_array());
		array_pop($results);
	    shuffle($results);
		$random = $results[0]["random"];
		$teamname1 = $results[0]["team1"];
		$teamname2 = $results[0]["team2"];
		$teams = array();
		$tempteams = array($teamname1, $teamname2);
		$lesserteam = array_rand($tempteams);
		$lesserteam = $tempteams[$lesserteam];
		if($lesserteam == $teamname1){
		    $otherteam = $teamname2;
		}else{
		    $otherteam = $teamname1;
		}
		for($i = 0; $i < count($results); $i++){
		    if($i%2 == 0){
		        array_push($teams,$lesserteam);
		    } else {
		        array_push($teams, $otherteam);
		    }
		}
	    for($i = 0; $i < count($results); $i++){
    	    $thisteam = $teams[$i];
    	    $player = $results[$i]["name"];
    	    $sql = "UPDATE `$gamename` SET `team`='$thisteam' WHERE `game_code` = '$gamecode' AND `name` = '$player'";
            $mysqli->query($sql);
    	}
	}

}
include('../../includes/updateGamePost.php');  
?>