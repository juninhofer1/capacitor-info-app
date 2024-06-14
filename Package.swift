// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorInfoDevice",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorInfoDevice",
            targets: ["InfoDevicePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "InfoDevicePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/InfoDevicePlugin"),
        .testTarget(
            name: "InfoDevicePluginTests",
            dependencies: ["InfoDevicePlugin"],
            path: "ios/Tests/InfoDevicePluginTests")
    ]
)