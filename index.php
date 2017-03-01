<?php 

if ( isset($_REQUEST['action'])) 
    {

        $message=$_REQUEST['contactMessage'];
        $name = $_REQUEST['contactName'];
        $mail = $_REQUEST['contactMail'];

        if( $_REQUEST['contactCompany'] != ""){
            $company = " - ";
            $company .= $_REQUEST['contactCompany'];
        } else { 
            $company = " - ";
        }


        $subject= $name . $company . " (".$mail.")";


        if(mail("dylan.cattelan@gmail.com", $subject, $message, "From: ".$mail) == TRUE){
            if(isset($_REQUEST['sendto'])){
                mail($mail, "Copy of your message sent to dylancattelan.com", $message, "From: contact@dylancattelan.com");
            }

            echo '<script language="javascript">';
            echo 'alert("Message successfully sent !")';
            echo '</script>';
        } else {
            
            $mailto="document.location.href='mailto:dylan.cattelan@gmail.com?subject=".$subject."&body=".$message."';"; 

            echo "<script>".$mailto."</script>";
        }
    }  



include('cv-theme/templates/index.html'); ?>
