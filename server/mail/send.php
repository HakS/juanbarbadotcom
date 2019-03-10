<?php

require 'vendor/autoload.php';
use Mailgun\Mailgun;
use Symfony\Component\Yaml\Yaml;

$yaml = Yaml::parse(file_get_contents('./settings.yml'));

header('Content-type: application/json');

try {
  $mg = Mailgun::create($yaml['mailgun_api']);
  $mg->messages()->send($yaml['mailgun_domain'], [
    'from'    => urldecode($_POST['mail']),
    'to'      => 'juan.barba.o@gmail.com',
    'subject' => 'JBCOM: ' . urldecode($_POST['name']) . ' thas sent you a message',
    'text'    => urldecode($_POST['message'])
  ]);
  
  echo json_encode([
    'message' => 'Your message has been sent successfully!'
  ]);
} catch (Exception $e) {
  header('HTTP/1.1 500 Internal Server Error');
  echo json_encode([
    'message' => 'There has been an error. Please check your info is correctly wrote.'
  ]);
}
