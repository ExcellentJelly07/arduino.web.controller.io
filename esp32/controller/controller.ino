#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "Tablet";
const char* password = "12345678";

WebServer server(80);

void setup() 
{
  Serial.begin(115200);
  delay(1000);
  Serial.println("ESP32 STARTED");
  
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(300);
    Serial.print("!.");
  }

  Serial.println("\nWiFi connected");
  Serial.print("ESP32 IP: ");
  Serial.println(WiFi.localIP());

  server.on("/on", []() 
  {
    digitalWrite(LED_BUILTIN, HIGH);
    server.send(200, "text/plain", "LED ON");
  });

  server.begin();
}

void loop() 
{
  server.handleClient();
}
