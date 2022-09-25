package com.daomtthuan.moni.newarchitecture;

import android.app.Application;

import androidx.annotation.NonNull;

import com.daomtthuan.moni.BuildConfig;
import com.daomtthuan.moni.newarchitecture.components.MainComponentsRegistry;
import com.daomtthuan.moni.newarchitecture.modules.MainApplicationTurboModuleManagerDelegate;
import com.facebook.react.PackageList;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactPackageTurboModuleManagerDelegate;
import com.facebook.react.bridge.JSIModulePackage;
import com.facebook.react.bridge.JSIModuleProvider;
import com.facebook.react.bridge.JSIModuleSpec;
import com.facebook.react.bridge.JSIModuleType;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.fabric.ComponentFactory;
import com.facebook.react.fabric.CoreComponentsRegistry;
import com.facebook.react.fabric.FabricJSIModuleProvider;
import com.facebook.react.fabric.ReactNativeConfig;
import com.facebook.react.uimanager.ViewManagerRegistry;

import java.util.ArrayList;
import java.util.List;

/**
 * A {@link ReactNativeHost} that helps you load everything needed for the New Architecture, both
 * TurboModule delegates and the Fabric Renderer.
 */
public class MainApplicationReactNativeHost extends ReactNativeHost {
  public MainApplicationReactNativeHost(Application application) {
    super(application);
  }

  @Override
  public boolean getUseDeveloperSupport() {
    return BuildConfig.DEBUG;
  }

  @Override
  protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();

    return packages;
  }

  @Override
  protected String getJSMainModuleName() {
    return "index";
  }

  @NonNull
  @Override
  protected ReactPackageTurboModuleManagerDelegate.Builder getReactPackageTurboModuleManagerDelegateBuilder() {
    // Provide the ReactPackageTurboModuleManagerDelegate Builder. This is necessary for the new architecture and to use TurboModules correctly.
    return new MainApplicationTurboModuleManagerDelegate.Builder();
  }

  @Override
  protected JSIModulePackage getJSIModulePackage() {
    return new JSIModulePackage() {
      @Override
      @SuppressWarnings("rawtypes")
      public List<JSIModuleSpec> getJSIModules(final ReactApplicationContext reactApplicationContext, final JavaScriptContextHolder jsContext) {
        final List<JSIModuleSpec> specs = new ArrayList<>();

        // Provide a new JSIModuleSpec that will be responsible of providing the custom Fabric Components.
        specs.add(new JSIModuleSpec() {
          @Override
          public JSIModuleType getJSIModuleType() {
            return JSIModuleType.UIManager;
          }

          @Override
          public JSIModuleProvider<UIManager> getJSIModuleProvider() {
            final ComponentFactory componentFactory = new ComponentFactory();
            CoreComponentsRegistry.register(componentFactory);

            // Register a Components Registry.
            // The one that is generated with the template contains no components and just provides you the one from React Native core.
            MainComponentsRegistry.register(componentFactory);

            final ReactInstanceManager reactInstanceManager = getReactInstanceManager();

            ViewManagerRegistry viewManagerRegistry = new ViewManagerRegistry(reactInstanceManager.getOrCreateViewManagers(reactApplicationContext));

            return new FabricJSIModuleProvider(
              reactApplicationContext,
              componentFactory,
              ReactNativeConfig.DEFAULT_CONFIG,
              viewManagerRegistry
            );
          }
        });
        return specs;
      }
    };
  }
}
