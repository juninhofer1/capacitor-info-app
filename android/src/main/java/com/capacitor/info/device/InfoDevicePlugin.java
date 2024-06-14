package com.capacitor.info.device;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.provider.Settings;
import android.telephony.TelephonyManager;
import android.util.Log;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "InfoDevice")
public class InfoDevicePlugin extends Plugin {
  private static final int PERMISSION_REQUEST_CODE = 100;
  private final InfoDevice implementation = new InfoDevice();

  @PluginMethod
  public void getDeviceInfo(PluginCall call) {
    try {
      if (ContextCompat.checkSelfPermission(getContext(), Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
        ActivityCompat.requestPermissions(getActivity(), new String[]{Manifest.permission.READ_PHONE_STATE}, PERMISSION_REQUEST_CODE);
        call.reject("Permission not granted");
        return;
      }

      PackageInfo packageInfo = getActivity().getPackageManager().getPackageInfo(getContext().getPackageName(), 0);
      String versionName = packageInfo.versionName;

      String[] deviceDetails = getDeviceDetails();
      JSObject ret = new JSObject();
      ret.put("imei", implementation.echo(deviceDetails[0]));
      ret.put("serialNumber", implementation.echo(deviceDetails[1]));
      ret.put("versionName", implementation.echo(versionName));
      call.resolve(ret);
    } catch (Exception ex) {
      call.reject("Failed to get device information");
    }
  }

  @SuppressLint({"MissingPermission", "HardwareIds"})
  private String[] getDeviceDetails() {
    String imei = "";
    String serialNumber = "";

    try {
      TelephonyManager telephonyManager = (TelephonyManager) getContext().getSystemService(Context.TELEPHONY_SERVICE);
      if (telephonyManager == null) {
        Log.e("DeviceDetails", "Failed to get TelephonyManager");
        return new String[]{"Unavailable TelephonyManager", "Unavailable TelephonyManager"};
      }


      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
        imei = Settings.Secure.getString(getContext().getContentResolver(), Settings.Secure.ANDROID_ID);
      } else {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
          imei = telephonyManager.getImei();
        } else {
          imei = telephonyManager.getDeviceId();
        }
      }

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        serialNumber = Build.getSerial();
      } else {
        serialNumber = Build.SERIAL;
      }

      Log.d("DeviceDetails", "IMEI: " + imei);
      Log.d("DeviceDetails", "Serial Number: " + serialNumber);
      return new String[]{imei, serialNumber};
    } catch (Exception e) {
      Log.e("DeviceDetails", "Failed to get device details");
    }
    if (imei.isEmpty()) {
      imei = "Unavailable Exception";
    }

    if (serialNumber.isEmpty()) {
      serialNumber = "Unavailable Exception";
    }
    return new String[]{imei, serialNumber};
  }
}
