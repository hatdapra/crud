<?PHP
  require 'connect.php';

  $postdata = file_get_contents("php://input");

  if(isset($postdata) && !empty($postdata)){
    $data = json_decode($postdata);

    // echo $data->flag;

    switch ($data->flag) {
      case 'elements':
        $sqlStr = "SELECT * FROM world.elements ORDER BY 1 desc";

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
      case 'elements_insert':
        $sqlStr = "INSERT INTO world.elements(name, weight, symbol)VALUES(
          '" . $data->data->name . "', 
          '" . $data->data->weight . "', 
          '" . $data->data->symbol . "' 
        )";
        $conn->query($sqlStr);
        
        break;
      case 'city_insert':
        $sqlStr = "INSERT INTO world.city(Name, CountryCode, District, Population) VALUES(
          '" . $data->data->Name . "',
          '" . $data->data->CountryCode . "',
          '" . $data->data->District . "',
          '" . $data->data->Population . "'
        )";
        $conn->query($sqlStr);
        
        break;  

      case 'elements_update':
        $sqlStr = "UPDATE world.elements SET 
          name = '" . $data->data->name . "', 
          weight = '" . $data->data->weight . "',
          symbol = '" . $data->data->symbol . "'
        WHERE position = '" . $data->data->position . "'";
        $conn->query($sqlStr);
        
        break;  
      case 'city_update':
        $sqlStr = "UPDATE world.city SET 
          Name = '" . $data->data->Name . "', 
          CountryCode = '" . $data->data->CountryCode . "',
          District = '" . $data->data->District . "', 
          Population = '" . $data->data->Population . "'
        WHERE id = '" . $data->data->ID . "'";
        $conn->query($sqlStr);
        
        break;  
      default:
        # code...
        break;
    }

  }

  $conn = null;
