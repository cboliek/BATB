<html>
  <head>
  </head>
  <body>
<?php
ini_set('display_errors', 1); /**set to 0 when you put it up **/
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "1061692278-8T5y75Ac2da85aB9lko4BETLE70bKzFc08fl1Sk",
    'oauth_access_token_secret' => "9Nye3I7Urg3yPDgl9F1LtNjz3JzyxieMwx2sqsxiEyArF",
    'consumer_key' => "sx1UcBtWqqF6VyZKpkrhrVIPx",
    'consumer_secret' => "gX7k4MVw56swX9h7pBscK1duZGRe7iJHXGLZasngAU0kuMkPG2"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'POST';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock',
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->buildOauth($url, $requestMethod)
//              ->setPostfields($postfields)
//              ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=#BeautyAndTheBeast&count=100';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);

$tweetData = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(), $assoc=TRUE);

foreach($tweetData['statuses'] as $index => $items) {

    $userArray = $items['user'];
    // echo '<div class="profile-pic">';
    // echo '<img src="' . $userArray['profile_img_url'] . '">';
    echo '<div class="twitter-tweet"> <a href="http://twitter.com/' . $userArray['screen_name']. '">"<img src="' . $userArray['profile_image_url'] .'"></a><ahref="http://twitter.com/' . $userArray['screen_name'] .'">' . $userArray['name'] . '</a></br/>'  . $items['text'];
    // echo '<br/>' . $items['created_at'];
    echo '</div>';

}

$twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
?>
</body>
</html>
