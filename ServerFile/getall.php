<?php
include "db.php";
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: origin, x-requested-with, content-type");

$Req = "SELECT * FROM ypresk_url order by timestamp desc";
$Req_data = $db->query($Req);
$i=-1;

    while($datae = $Req_data->fetch()) {
        $i++;
        $short = $datae["keyword"];
        $original = $datae["url"];
        $title = $datae["title"];
        $time = $datae["timestamp"];
        $clic = $datae["clicks"];
       
        
        $tab[$i]['ShortLink']="https://urys.xyz/".$short;
        $tab[$i]['OriginalLink']=$original;
        $tab[$i]['Title']=$levedAt;
        $tab[$i]['Time']=$time;
        $tab[$i]['Clicks']=$clic;

    }
  
    $arr = array(
        'links' => $tab
      );

echo json_encode($arr);
?>
