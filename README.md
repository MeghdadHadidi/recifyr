# Recifyr
### Responsive Event Countdown
A simple countdown app built with Angular. The app allows users to set an event name and end date, displaying the time remaining in days, hours, minutes, and seconds. The text dynamically resizes to fit the screen width and the event details are persisted across page reloads.

## 🎬 Demo ![App Deployment](https://deploy-badge.vercel.app/?url=https://recifyr.vercel.app/)

#### Wanna see how it works? 
Check out the deployed one on Vercel! 😎

[Live demo on Vercel](https://recifyr.vercel.app/)

#### Wanna see how it looks?
Make sure you watch this gif to the end 🤓

![](https://pouch.jumpshare.com/preview/yD_FVvWfG4wvFTVNk9p4XYgo_SqT3upLu1zaqGPutocgEhYEExEiSJuFj9KXcHMDfdIhnZqhayihPGFXeMk5NGCgRYRs6SxhsgDWTyELooU)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js
- Angular CLI

### Installation
1. **Clone the Repository**

```bash
   git clone <repo-url>
   cd <project-directory>
```

2. **Install Dependencies**

```bash
    npm install
```

### Running the Project Locally

1. Start the Development Server

```bash
    ng serve
```

2. Access the Application

Open your browser and navigate to [localhost:4200](http://localhost:4200/)

### Running the Angular App on a Local Network
If you want to test the app on your mobile device, you can run the Angular app on a local network.

1. Make sure you have a local network connection and that you have the IP address of your device.

```bash
ipconfig getifaddr en0

ipconfig getifaddr en1
```
2. Start the Development Server with Network Access
```bash
ng serve --host 192.168.x.x 
```
replace `192.168.x.x` with the IP address of your device.

3. Access the Application on a Mobile Device
- Ensure your mobile device is connected to the same network as your development machine.
- Open your browser on the mobile device and navigate to http://<your-ip-address>:4200/.


## 🤝 Contributing

### How to Contribute
1. Fork the repository
2. Follow naming convention when creating your branch as follow

`feature/your-feature-name`

3. Make necessary changes and create a pull request
4. Provide a clear description of the changes and any related issue numbers.

## ✅ Todo
- [x] Create a basic countdown component
- [x] Move the input fields to parent component
- [x] Add necessary styles to achieve the figma design specification
- [x] Add a function to change the `font-size`
- [x] Use RxJx instead of `setInterval`

## ❤️‍🩹 Improvements
- [ ] **Validation** the date: add a date validation: validate both it 1. being an instance of Date and 2. `.getTime()` not returns `NaN`
- [ ] **Data Persistence** use localStorage to persist the event name and date so that the user can continue the countdown from where he left it after refreshing the browser
- [ ] **Accessibility** Make sure the markup is accessible for screen readers
- [ ] **Dark Mode** Implement dark mode for users who prefer dark mode
- [ ] **Testing** Ensure of a good test coverage
- [ ] **Utilize Sound Effects** to notify the user when the countdown is over

## 📋 Go-live Check-list
- [x] CI/CD pipeline setup
- [ ] Performance optiomization by utilizing lazy loading for any additional components or modules that are not critical for the initial load
- [ ] Cleanup the solution from unnecessary code, `console.log`s and comments
- [ ] Setup deployment server (either cloud services or on-premise)
- [ ] Implement unit/component testing