// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__12751__12752__auto__){var G__64291 = p1__12751__12752__auto__;if(G__64291)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__64291.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__64291.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__64291);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__64291);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__64292_SHARP_){return (cljs.core.val.call(null,p1__64292_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__64294 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__64294,(0),null);var v = cljs.core.nth.call(null,vec__64294,(1),null);var p = vec__64294;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___64300 = schema.utils.use_fn_validation;var output_schema64295_64301 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema64296_64302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker64297_64303 = schema.core.checker.call(null,input_schema64296_64302);var output_checker64298_64304 = schema.core.checker.call(null,output_schema64295_64301);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___64300,output_schema64295_64301,input_schema64296_64302,input_checker64297_64303,output_checker64298_64304){
return (function unwrap_schema_form_key(G__64299){var validate__12721__auto__ = ufv___64300.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___64305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64299], null);var temp__4126__auto___64306 = input_checker64297_64303.call(null,args__12722__auto___64305);if(cljs.core.truth_(temp__4126__auto___64306))
{var error__12723__auto___64307 = temp__4126__auto___64306;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12723__auto___64307)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64296_64302,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64305,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64307], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var k = G__64299;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___64308 = output_checker64298_64304.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64308))
{var error__12723__auto___64309 = temp__4126__auto___64308;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12723__auto___64309)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64295_64301,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64309], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64300,output_schema64295_64301,input_schema64296_64302,input_checker64297_64303,output_checker64298_64304))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema64295_64301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64296_64302], null)));
var ufv___64315 = schema.utils.use_fn_validation;var output_schema64310_64316 = schema.core.Any;var input_schema64311_64317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker64312_64318 = schema.core.checker.call(null,input_schema64311_64317);var output_checker64313_64319 = schema.core.checker.call(null,output_schema64310_64316);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___64315,output_schema64310_64316,input_schema64311_64317,input_checker64312_64318,output_checker64313_64319){
return (function explicit_schema_key_map(G__64314){var validate__12721__auto__ = ufv___64315.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___64320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64314], null);var temp__4126__auto___64321 = input_checker64312_64318.call(null,args__12722__auto___64320);if(cljs.core.truth_(temp__4126__auto___64321))
{var error__12723__auto___64322 = temp__4126__auto___64321;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12723__auto___64322)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64311_64317,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64320,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64322], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__64314;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___64323 = output_checker64313_64319.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64323))
{var error__12723__auto___64324 = temp__4126__auto___64323;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12723__auto___64324)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64310_64316,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64324], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64315,output_schema64310_64316,input_schema64311_64317,input_checker64312_64318,output_checker64313_64319))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema64310_64316,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64311_64317], null)));
var ufv___64330 = schema.utils.use_fn_validation;var output_schema64325_64331 = schema.core.Any;var input_schema64326_64332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker64327_64333 = schema.core.checker.call(null,input_schema64326_64332);var output_checker64328_64334 = schema.core.checker.call(null,output_schema64325_64331);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___64330,output_schema64325_64331,input_schema64326_64332,input_checker64327_64333,output_checker64328_64334){
return (function split_schema_keys(G__64329){var validate__12721__auto__ = ufv___64330.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___64335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64329], null);var temp__4126__auto___64336 = input_checker64327_64333.call(null,args__12722__auto___64335);if(cljs.core.truth_(temp__4126__auto___64336))
{var error__12723__auto___64337 = temp__4126__auto___64336;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12723__auto___64337)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64326_64332,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64335,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64337], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__64329;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___64338 = output_checker64328_64334.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64338))
{var error__12723__auto___64339 = temp__4126__auto___64338;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12723__auto___64339)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64325_64331,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64339], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64330,output_schema64325_64331,input_schema64326_64332,input_checker64327_64333,output_checker64328_64334))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema64325_64331,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64326_64332], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__64343){var vec__64344 = p__64343;var k = cljs.core.nth.call(null,vec__64344,(0),null);var v = cljs.core.nth.call(null,vec__64344,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__64345 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__64345,(0),null);var ov = cljs.core.nth.call(null,vec__64345,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__64346){
var key_project = cljs.core.first(arglist__64346);
arglist__64346 = cljs.core.next(arglist__64346);
var key_combine = cljs.core.first(arglist__64346);
arglist__64346 = cljs.core.next(arglist__64346);
var val_combine = cljs.core.first(arglist__64346);
var maps = cljs.core.rest(arglist__64346);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___64354 = schema.utils.use_fn_validation;var output_schema64348_64355 = plumbing.fnk.schema.InputSchema;var input_schema64349_64356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker64350_64357 = schema.core.checker.call(null,input_schema64349_64356);var output_checker64351_64358 = schema.core.checker.call(null,output_schema64348_64355);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358){
return (function union_input_schemata(G__64352,G__64353){var validate__12721__auto__ = ufv___64354.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___64359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64352,G__64353], null);var temp__4126__auto___64360 = input_checker64350_64357.call(null,args__12722__auto___64359);if(cljs.core.truth_(temp__4126__auto___64360))
{var error__12723__auto___64361 = temp__4126__auto___64360;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12723__auto___64361)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64349_64356,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64359,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64361], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var i1 = G__64352;var i2 = G__64353;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__12721__auto__,ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358){
return (function (p1__64347_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__64347_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__64347_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__12721__auto__,ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358))
,((function (validate__12721__auto__,ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__12721__auto__,ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358))
,((function (validate__12721__auto__,ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__12721__auto__,ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___64362 = output_checker64351_64358.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64362))
{var error__12723__auto___64363 = temp__4126__auto___64362;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12723__auto___64363)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64348_64355,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64363], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64354,output_schema64348_64355,input_schema64349_64356,input_checker64350_64357,output_checker64351_64358))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema64348_64355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64349_64356], null)));
var ufv___64369 = schema.utils.use_fn_validation;var output_schema64364_64370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema64365_64371 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker64366_64372 = schema.core.checker.call(null,input_schema64365_64371);var output_checker64367_64373 = schema.core.checker.call(null,output_schema64364_64370);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___64369,output_schema64364_64370,input_schema64365_64371,input_checker64366_64372,output_checker64367_64373){
return (function required_toplevel_keys(G__64368){var validate__12721__auto__ = ufv___64369.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___64374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64368], null);var temp__4126__auto___64375 = input_checker64366_64372.call(null,args__12722__auto___64374);if(cljs.core.truth_(temp__4126__auto___64375))
{var error__12723__auto___64376 = temp__4126__auto___64375;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12723__auto___64376)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64365_64371,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64374,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64376], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var input_schema = G__64368;while(true){
return cljs.core.keep.call(null,((function (validate__12721__auto__,ufv___64369,output_schema64364_64370,input_schema64365_64371,input_checker64366_64372,output_checker64367_64373){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__12721__auto__,ufv___64369,output_schema64364_64370,input_schema64365_64371,input_checker64366_64372,output_checker64367_64373))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___64377 = output_checker64367_64373.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64377))
{var error__12723__auto___64378 = temp__4126__auto___64377;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12723__auto___64378)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64364_64370,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64378], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64369,output_schema64364_64370,input_schema64365_64371,input_checker64366_64372,output_checker64367_64373))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema64364_64370,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64365_64371], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__64387(s__64388){return (new cljs.core.LazySeq(null,(function (){var s__64388__$1 = s__64388;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__64388__$1);if(temp__4126__auto__)
{var s__64388__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__64388__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__64388__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__64390 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__64389 = (0);while(true){
if((i__64389 < size__4282__auto__))
{var vec__64393 = cljs.core._nth.call(null,c__4281__auto__,i__64389);var k = cljs.core.nth.call(null,vec__64393,(0),null);var v = cljs.core.nth.call(null,vec__64393,(1),null);cljs.core.chunk_append.call(null,b__64390,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__64395 = (i__64389 + (1));
i__64389 = G__64395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64390),iter__64387.call(null,cljs.core.chunk_rest.call(null,s__64388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64390),null);
}
} else
{var vec__64394 = cljs.core.first.call(null,s__64388__$2);var k = cljs.core.nth.call(null,vec__64394,(0),null);var v = cljs.core.nth.call(null,vec__64394,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__64387.call(null,cljs.core.rest.call(null,s__64388__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__64404(s__64405){return (new cljs.core.LazySeq(null,(function (){var s__64405__$1 = s__64405;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__64405__$1);if(temp__4126__auto__)
{var s__64405__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__64405__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__64405__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__64407 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__64406 = (0);while(true){
if((i__64406 < size__4282__auto__))
{var vec__64410 = cljs.core._nth.call(null,c__4281__auto__,i__64406);var k = cljs.core.nth.call(null,vec__64410,(0),null);var v = cljs.core.nth.call(null,vec__64410,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__64407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__64412 = (i__64406 + (1));
i__64406 = G__64412;
continue;
}
} else
{{
var G__64413 = (i__64406 + (1));
i__64406 = G__64413;
continue;
}
}
} else
{{
var G__64414 = (i__64406 + (1));
i__64406 = G__64414;
continue;
}
}
} else
{{
var G__64415 = (i__64406 + (1));
i__64406 = G__64415;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64407),iter__64404.call(null,cljs.core.chunk_rest.call(null,s__64405__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64407),null);
}
} else
{var vec__64411 = cljs.core.first.call(null,s__64405__$2);var k = cljs.core.nth.call(null,vec__64411,(0),null);var v = cljs.core.nth.call(null,vec__64411,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__64404.call(null,cljs.core.rest.call(null,s__64405__$2)));
} else
{{
var G__64416 = cljs.core.rest.call(null,s__64405__$2);
s__64405__$1 = G__64416;
continue;
}
}
} else
{{
var G__64417 = cljs.core.rest.call(null,s__64405__$2);
s__64405__$1 = G__64417;
continue;
}
}
} else
{{
var G__64418 = cljs.core.rest.call(null,s__64405__$2);
s__64405__$1 = G__64418;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___64441 = schema.utils.use_fn_validation;var output_schema64419_64442 = schema.core.Any;var input_schema64420_64443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker64421_64444 = schema.core.checker.call(null,input_schema64420_64443);var output_checker64422_64445 = schema.core.checker.call(null,output_schema64419_64442);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___64441,output_schema64419_64442,input_schema64420_64443,input_checker64421_64444,output_checker64422_64445){
return (function compose_schemata(G__64423,G__64424){var validate__12721__auto__ = true;if(validate__12721__auto__)
{var args__12722__auto___64446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64423,G__64424], null);var temp__4126__auto___64447 = input_checker64421_64444.call(null,args__12722__auto___64446);if(cljs.core.truth_(temp__4126__auto___64447))
{var error__12723__auto___64448 = temp__4126__auto___64447;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12723__auto___64448)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64420_64443,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64446,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64448], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__64435 = G__64423;var vec__64437 = G__64435;var i2 = cljs.core.nth.call(null,vec__64437,(0),null);var o2 = cljs.core.nth.call(null,vec__64437,(1),null);var G__64436 = G__64424;var vec__64438 = G__64436;var i1 = cljs.core.nth.call(null,vec__64438,(0),null);var o1 = cljs.core.nth.call(null,vec__64438,(1),null);var G__64435__$1 = G__64435;var G__64436__$1 = G__64436;while(true){
var vec__64439 = G__64435__$1;var i2__$1 = cljs.core.nth.call(null,vec__64439,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__64439,(1),null);var vec__64440 = G__64436__$1;var i1__$1 = cljs.core.nth.call(null,vec__64440,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__64440,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__12721__auto__)
{var temp__4126__auto___64449 = output_checker64422_64445.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64449))
{var error__12723__auto___64450 = temp__4126__auto___64449;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12723__auto___64450)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64419_64442,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64450], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64441,output_schema64419_64442,input_schema64420_64443,input_checker64421_64444,output_checker64422_64445))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema64419_64442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64420_64443], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___64529 = schema.utils.use_fn_validation;var output_schema64451_64530 = schema.core.Any;var input_schema64452_64531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker64453_64532 = schema.core.checker.call(null,input_schema64452_64531);var output_checker64454_64533 = schema.core.checker.call(null,output_schema64451_64530);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533){
return (function split_schema(G__64455,G__64456){var validate__12721__auto__ = ufv___64529.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___64534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64455,G__64456], null);var temp__4126__auto___64535 = input_checker64453_64532.call(null,args__12722__auto___64534);if(cljs.core.truth_(temp__4126__auto___64535))
{var error__12723__auto___64536 = temp__4126__auto___64535;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12723__auto___64536)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64452_64531,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64534,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64536], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__64455;var ks = G__64456;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533){
return (function iter__64493(s__64494){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533){
return (function (){var s__64494__$1 = s__64494;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__64494__$1);if(temp__4126__auto__)
{var s__64494__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__64494__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__64494__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__64496 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__64495 = (0);while(true){
if((i__64495 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__64495);cljs.core.chunk_append.call(null,b__64496,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__64495,in_QMARK_,c__4281__auto__,size__4282__auto__,b__64496,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533){
return (function iter__64513(s__64514){return (new cljs.core.LazySeq(null,((function (i__64495,in_QMARK_,c__4281__auto__,size__4282__auto__,b__64496,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533){
return (function (){var s__64514__$1 = s__64514;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__64514__$1);if(temp__4126__auto____$1)
{var s__64514__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__64514__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__64514__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__64516 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__64515 = (0);while(true){
if((i__64515 < size__4282__auto____$1))
{var vec__64519 = cljs.core._nth.call(null,c__4281__auto____$1,i__64515);var k = cljs.core.nth.call(null,vec__64519,(0),null);var v = cljs.core.nth.call(null,vec__64519,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__64516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__64537 = (i__64515 + (1));
i__64515 = G__64537;
continue;
}
} else
{{
var G__64538 = (i__64515 + (1));
i__64515 = G__64538;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64516),iter__64513.call(null,cljs.core.chunk_rest.call(null,s__64514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64516),null);
}
} else
{var vec__64520 = cljs.core.first.call(null,s__64514__$2);var k = cljs.core.nth.call(null,vec__64520,(0),null);var v = cljs.core.nth.call(null,vec__64520,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__64513.call(null,cljs.core.rest.call(null,s__64514__$2)));
} else
{{
var G__64539 = cljs.core.rest.call(null,s__64514__$2);
s__64514__$1 = G__64539;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__64495,in_QMARK_,c__4281__auto__,size__4282__auto__,b__64496,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533))
,null,null));
});})(i__64495,in_QMARK_,c__4281__auto__,size__4282__auto__,b__64496,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__64540 = (i__64495 + (1));
i__64495 = G__64540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64496),iter__64493.call(null,cljs.core.chunk_rest.call(null,s__64494__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64496),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__64494__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533){
return (function iter__64521(s__64522){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533){
return (function (){var s__64522__$1 = s__64522;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__64522__$1);if(temp__4126__auto____$1)
{var s__64522__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__64522__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__64522__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__64524 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__64523 = (0);while(true){
if((i__64523 < size__4282__auto__))
{var vec__64527 = cljs.core._nth.call(null,c__4281__auto__,i__64523);var k = cljs.core.nth.call(null,vec__64527,(0),null);var v = cljs.core.nth.call(null,vec__64527,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__64524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__64541 = (i__64523 + (1));
i__64523 = G__64541;
continue;
}
} else
{{
var G__64542 = (i__64523 + (1));
i__64523 = G__64542;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64524),iter__64521.call(null,cljs.core.chunk_rest.call(null,s__64522__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64524),null);
}
} else
{var vec__64528 = cljs.core.first.call(null,s__64522__$2);var k = cljs.core.nth.call(null,vec__64528,(0),null);var v = cljs.core.nth.call(null,vec__64528,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__64521.call(null,cljs.core.rest.call(null,s__64522__$2)));
} else
{{
var G__64543 = cljs.core.rest.call(null,s__64522__$2);
s__64522__$1 = G__64543;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533))
,null,null));
});})(in_QMARK_,s__64494__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533))
;return iter__4283__auto__.call(null,s);
})()),iter__64493.call(null,cljs.core.rest.call(null,s__64494__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533))
,null,null));
});})(ks__$1,validate__12721__auto__,ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___64544 = output_checker64454_64533.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64544))
{var error__12723__auto___64545 = temp__4126__auto___64544;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12723__auto___64545)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64451_64530,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64545], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64529,output_schema64451_64530,input_schema64452_64531,input_checker64453_64532,output_checker64454_64533))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema64451_64530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64452_64531], null)));
var ufv___64576 = schema.utils.use_fn_validation;var output_schema64546_64577 = plumbing.fnk.schema.GraphIOSchemata;var input_schema64547_64578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker64548_64579 = schema.core.checker.call(null,input_schema64547_64578);var output_checker64549_64580 = schema.core.checker.call(null,output_schema64546_64577);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___64576,output_schema64546_64577,input_schema64547_64578,input_checker64548_64579,output_checker64549_64580){
return (function sequence_schemata(G__64550,G__64551){var validate__12721__auto__ = ufv___64576.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___64581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__64550,G__64551], null);var temp__4126__auto___64582 = input_checker64548_64579.call(null,args__12722__auto___64581);if(cljs.core.truth_(temp__4126__auto___64582))
{var error__12723__auto___64583 = temp__4126__auto___64582;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12723__auto___64583)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema64547_64578,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___64581,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64583], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__64567 = G__64550;var vec__64569 = G__64567;var i1 = cljs.core.nth.call(null,vec__64569,(0),null);var o1 = cljs.core.nth.call(null,vec__64569,(1),null);var G__64568 = G__64551;var vec__64570 = G__64568;var k = cljs.core.nth.call(null,vec__64570,(0),null);var vec__64571 = cljs.core.nth.call(null,vec__64570,(1),null);var i2 = cljs.core.nth.call(null,vec__64571,(0),null);var o2 = cljs.core.nth.call(null,vec__64571,(1),null);var G__64567__$1 = G__64567;var G__64568__$1 = G__64568;while(true){
var vec__64572 = G__64567__$1;var i1__$1 = cljs.core.nth.call(null,vec__64572,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__64572,(1),null);var vec__64573 = G__64568__$1;var k__$1 = cljs.core.nth.call(null,vec__64573,(0),null);var vec__64574 = cljs.core.nth.call(null,vec__64573,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__64574,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__64574,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__64575 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__64575,(0),null);var unused = cljs.core.nth.call(null,vec__64575,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___64584 = output_checker64549_64580.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___64584))
{var error__12723__auto___64585 = temp__4126__auto___64584;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12723__auto___64585)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema64546_64577,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___64585], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___64576,output_schema64546_64577,input_schema64547_64578,input_checker64548_64579,output_checker64549_64580))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema64546_64577,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema64547_64578], null)));

//# sourceMappingURL=schema.js.map