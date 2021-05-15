# Zoom Attendance Extension

A Chrome Extension for [zoom.us](https://zoom.us/) automatic class attendance.

# Usage

* Clone the repo files.
* On your Google Chrome or Chromium based browser, open the extensions tab.
* Activate developer mode.
* Load the folder that contains the files as unpacked extension.
* Open your zoom meeting on your browser with extension active.
* Open the participants tab.
* Wait 10 seconds for the first attendance check.
* Then you will see two buttons, `Generate Attendace` is active and `Download Attendance File` is inactive because requires to generate the attendance first.
* `Generate Attendance` will refresh all attendance checks until now (We recommend generate attendance just before download the file).
* `Download Attendance File` will download a file with a list of all participants who were in the meeting and their connection time according to the 10 seconds attendance check interval.