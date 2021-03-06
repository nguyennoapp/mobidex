package io.mobidex;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.github.traviskn.rnuuidgenerator.RNUUIDGeneratorPackage;
import com.masteratul.exceptionhandler.ReactNativeExceptionHandlerPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            new RNUUIDGeneratorPackage(),
        new ReactNativeExceptionHandlerPackage(),
        new ReactNativeRestartPackage(),
        new RNDeviceInfo(),
        new GoogleAnalyticsBridgePackage(),
        new WalletManagerPackage(),
        new SvgPackage(),
        new VectorIconsPackage(),
        new RandomBytesPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
