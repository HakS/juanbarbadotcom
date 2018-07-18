<?php

require 'vendor/autoload.php';
use Mailgun\Mailgun;
use Symfony\Component\Yaml\Yaml;

$yaml = Yaml::parse(file_get_contents('./settings.yml'));

# First, instantiate the SDK with your API credentials
$mg = Mailgun::create($yaml['mailgun_api']);

# Now, compose and send your message.
# $mg->messages()->send($domain, $params);
$mg->messages()->send($yaml['mailgun_domain'], [
  'from'    => 'bob@example.com',
  'to'      => 'juan.barba.o@gmail.com',
  'subject' => 'The PHP SDK is awesome!',
  'text'    => 'It is so simple to send a message.'
]);
