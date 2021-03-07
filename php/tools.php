<?PHP
  require 'connect.php';

  $postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata)){
    $data = json_decode($postdata);

    // echo $data->flag;

    switch ($data->flag) {
      case 'elements':
        $sqlStr = "SELECT * FROM world.elements";

        $res = $conn->query($sqlStr);
        $lista = $res->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($lista);
        break;
      case 'city':
        $sqlStr = "SELECT * FROM world.city";

        $res = $conn->query($sqlStr);
        $lista = $res->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($lista);
        break;
      default:
        # code...
        break;
    }

  }

  $conn = null;
?>