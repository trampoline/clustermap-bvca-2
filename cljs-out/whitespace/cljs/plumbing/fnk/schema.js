// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13098__13099__auto__){var G__22890 = p1__13098__13099__auto__;if(G__22890)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__22890.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__22890.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22890);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22890);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__22891_SHARP_){return (cljs.core.val.call(null,p1__22891_SHARP_) > (1));
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
var vec__22893 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__22893,(0),null);var v = cljs.core.nth.call(null,vec__22893,(1),null);var p = vec__22893;if(cljs.core.truth_(p))
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
var ufv___22899 = schema.utils.use_fn_validation;var output_schema22894_22900 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema22895_22901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker22896_22902 = schema.core.checker.call(null,input_schema22895_22901);var output_checker22897_22903 = schema.core.checker.call(null,output_schema22894_22900);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22899,output_schema22894_22900,input_schema22895_22901,input_checker22896_22902,output_checker22897_22903){
return (function unwrap_schema_form_key(G__22898){var validate__13068__auto__ = ufv___22899.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___22904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22898], null);var temp__4126__auto___22905 = input_checker22896_22902.call(null,args__13069__auto___22904);if(cljs.core.truth_(temp__4126__auto___22905))
{var error__13070__auto___22906 = temp__4126__auto___22905;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13070__auto___22906)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22895_22901,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___22904,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22906], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var k = G__22898;while(true){
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
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___22907 = output_checker22897_22903.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___22907))
{var error__13070__auto___22908 = temp__4126__auto___22907;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13070__auto___22908)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22894_22900,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22908], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___22899,output_schema22894_22900,input_schema22895_22901,input_checker22896_22902,output_checker22897_22903))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema22894_22900,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22895_22901], null)));
var ufv___22914 = schema.utils.use_fn_validation;var output_schema22909_22915 = schema.core.Any;var input_schema22910_22916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22911_22917 = schema.core.checker.call(null,input_schema22910_22916);var output_checker22912_22918 = schema.core.checker.call(null,output_schema22909_22915);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22914,output_schema22909_22915,input_schema22910_22916,input_checker22911_22917,output_checker22912_22918){
return (function explicit_schema_key_map(G__22913){var validate__13068__auto__ = ufv___22914.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___22919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22913], null);var temp__4126__auto___22920 = input_checker22911_22917.call(null,args__13069__auto___22919);if(cljs.core.truth_(temp__4126__auto___22920))
{var error__13070__auto___22921 = temp__4126__auto___22920;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13070__auto___22921)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22910_22916,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___22919,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22921], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__22913;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___22922 = output_checker22912_22918.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___22922))
{var error__13070__auto___22923 = temp__4126__auto___22922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13070__auto___22923)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22909_22915,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22923], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___22914,output_schema22909_22915,input_schema22910_22916,input_checker22911_22917,output_checker22912_22918))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema22909_22915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22910_22916], null)));
var ufv___22929 = schema.utils.use_fn_validation;var output_schema22924_22930 = schema.core.Any;var input_schema22925_22931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22926_22932 = schema.core.checker.call(null,input_schema22925_22931);var output_checker22927_22933 = schema.core.checker.call(null,output_schema22924_22930);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22929,output_schema22924_22930,input_schema22925_22931,input_checker22926_22932,output_checker22927_22933){
return (function split_schema_keys(G__22928){var validate__13068__auto__ = ufv___22929.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___22934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22928], null);var temp__4126__auto___22935 = input_checker22926_22932.call(null,args__13069__auto___22934);if(cljs.core.truth_(temp__4126__auto___22935))
{var error__13070__auto___22936 = temp__4126__auto___22935;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13070__auto___22936)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22925_22931,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___22934,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22936], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__22928;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___22937 = output_checker22927_22933.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___22937))
{var error__13070__auto___22938 = temp__4126__auto___22937;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13070__auto___22938)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22924_22930,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22938], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___22929,output_schema22924_22930,input_schema22925_22931,input_checker22926_22932,output_checker22927_22933))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema22924_22930,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22925_22931], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__22942){var vec__22943 = p__22942;var k = cljs.core.nth.call(null,vec__22943,(0),null);var v = cljs.core.nth.call(null,vec__22943,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__22944 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__22944,(0),null);var ov = cljs.core.nth.call(null,vec__22944,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__22945){
var key_project = cljs.core.first(arglist__22945);
arglist__22945 = cljs.core.next(arglist__22945);
var key_combine = cljs.core.first(arglist__22945);
arglist__22945 = cljs.core.next(arglist__22945);
var val_combine = cljs.core.first(arglist__22945);
var maps = cljs.core.rest(arglist__22945);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___22953 = schema.utils.use_fn_validation;var output_schema22947_22954 = plumbing.fnk.schema.InputSchema;var input_schema22948_22955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker22949_22956 = schema.core.checker.call(null,input_schema22948_22955);var output_checker22950_22957 = schema.core.checker.call(null,output_schema22947_22954);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957){
return (function union_input_schemata(G__22951,G__22952){var validate__13068__auto__ = ufv___22953.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___22958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22951,G__22952], null);var temp__4126__auto___22959 = input_checker22949_22956.call(null,args__13069__auto___22958);if(cljs.core.truth_(temp__4126__auto___22959))
{var error__13070__auto___22960 = temp__4126__auto___22959;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13070__auto___22960)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22948_22955,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___22958,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22960], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var i1 = G__22951;var i2 = G__22952;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13068__auto__,ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957){
return (function (p1__22946_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__22946_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__22946_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13068__auto__,ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957))
,((function (validate__13068__auto__,ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957){
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
});})(validate__13068__auto__,ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957))
,((function (validate__13068__auto__,ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13068__auto__,ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___22961 = output_checker22950_22957.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___22961))
{var error__13070__auto___22962 = temp__4126__auto___22961;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13070__auto___22962)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22947_22954,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22962], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___22953,output_schema22947_22954,input_schema22948_22955,input_checker22949_22956,output_checker22950_22957))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema22947_22954,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22948_22955], null)));
var ufv___22968 = schema.utils.use_fn_validation;var output_schema22963_22969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema22964_22970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker22965_22971 = schema.core.checker.call(null,input_schema22964_22970);var output_checker22966_22972 = schema.core.checker.call(null,output_schema22963_22969);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___22968,output_schema22963_22969,input_schema22964_22970,input_checker22965_22971,output_checker22966_22972){
return (function required_toplevel_keys(G__22967){var validate__13068__auto__ = ufv___22968.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___22973 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22967], null);var temp__4126__auto___22974 = input_checker22965_22971.call(null,args__13069__auto___22973);if(cljs.core.truth_(temp__4126__auto___22974))
{var error__13070__auto___22975 = temp__4126__auto___22974;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13070__auto___22975)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22964_22970,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___22973,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22975], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var input_schema = G__22967;while(true){
return cljs.core.keep.call(null,((function (validate__13068__auto__,ufv___22968,output_schema22963_22969,input_schema22964_22970,input_checker22965_22971,output_checker22966_22972){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13068__auto__,ufv___22968,output_schema22963_22969,input_schema22964_22970,input_checker22965_22971,output_checker22966_22972))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___22976 = output_checker22966_22972.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___22976))
{var error__13070__auto___22977 = temp__4126__auto___22976;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13070__auto___22977)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22963_22969,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___22977], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___22968,output_schema22963_22969,input_schema22964_22970,input_checker22965_22971,output_checker22966_22972))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema22963_22969,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22964_22970], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__22986(s__22987){return (new cljs.core.LazySeq(null,(function (){var s__22987__$1 = s__22987;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22987__$1);if(temp__4126__auto__)
{var s__22987__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22987__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__22987__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__22989 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__22988 = (0);while(true){
if((i__22988 < size__4374__auto__))
{var vec__22992 = cljs.core._nth.call(null,c__4373__auto__,i__22988);var k = cljs.core.nth.call(null,vec__22992,(0),null);var v = cljs.core.nth.call(null,vec__22992,(1),null);cljs.core.chunk_append.call(null,b__22989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__22994 = (i__22988 + (1));
i__22988 = G__22994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22989),iter__22986.call(null,cljs.core.chunk_rest.call(null,s__22987__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22989),null);
}
} else
{var vec__22993 = cljs.core.first.call(null,s__22987__$2);var k = cljs.core.nth.call(null,vec__22993,(0),null);var v = cljs.core.nth.call(null,vec__22993,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__22986.call(null,cljs.core.rest.call(null,s__22987__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__23003(s__23004){return (new cljs.core.LazySeq(null,(function (){var s__23004__$1 = s__23004;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23004__$1);if(temp__4126__auto__)
{var s__23004__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23004__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23004__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23006 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23005 = (0);while(true){
if((i__23005 < size__4374__auto__))
{var vec__23009 = cljs.core._nth.call(null,c__4373__auto__,i__23005);var k = cljs.core.nth.call(null,vec__23009,(0),null);var v = cljs.core.nth.call(null,vec__23009,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__23006,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__23011 = (i__23005 + (1));
i__23005 = G__23011;
continue;
}
} else
{{
var G__23012 = (i__23005 + (1));
i__23005 = G__23012;
continue;
}
}
} else
{{
var G__23013 = (i__23005 + (1));
i__23005 = G__23013;
continue;
}
}
} else
{{
var G__23014 = (i__23005 + (1));
i__23005 = G__23014;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23006),iter__23003.call(null,cljs.core.chunk_rest.call(null,s__23004__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23006),null);
}
} else
{var vec__23010 = cljs.core.first.call(null,s__23004__$2);var k = cljs.core.nth.call(null,vec__23010,(0),null);var v = cljs.core.nth.call(null,vec__23010,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23003.call(null,cljs.core.rest.call(null,s__23004__$2)));
} else
{{
var G__23015 = cljs.core.rest.call(null,s__23004__$2);
s__23004__$1 = G__23015;
continue;
}
}
} else
{{
var G__23016 = cljs.core.rest.call(null,s__23004__$2);
s__23004__$1 = G__23016;
continue;
}
}
} else
{{
var G__23017 = cljs.core.rest.call(null,s__23004__$2);
s__23004__$1 = G__23017;
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
});return iter__4375__auto__.call(null,input_schema);
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
var ufv___23040 = schema.utils.use_fn_validation;var output_schema23018_23041 = schema.core.Any;var input_schema23019_23042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23020_23043 = schema.core.checker.call(null,input_schema23019_23042);var output_checker23021_23044 = schema.core.checker.call(null,output_schema23018_23041);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23040,output_schema23018_23041,input_schema23019_23042,input_checker23020_23043,output_checker23021_23044){
return (function compose_schemata(G__23022,G__23023){var validate__13068__auto__ = true;if(validate__13068__auto__)
{var args__13069__auto___23045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23022,G__23023], null);var temp__4126__auto___23046 = input_checker23020_23043.call(null,args__13069__auto___23045);if(cljs.core.truth_(temp__4126__auto___23046))
{var error__13070__auto___23047 = temp__4126__auto___23046;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13070__auto___23047)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23019_23042,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___23045,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___23047], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__23034 = G__23022;var vec__23036 = G__23034;var i2 = cljs.core.nth.call(null,vec__23036,(0),null);var o2 = cljs.core.nth.call(null,vec__23036,(1),null);var G__23035 = G__23023;var vec__23037 = G__23035;var i1 = cljs.core.nth.call(null,vec__23037,(0),null);var o1 = cljs.core.nth.call(null,vec__23037,(1),null);var G__23034__$1 = G__23034;var G__23035__$1 = G__23035;while(true){
var vec__23038 = G__23034__$1;var i2__$1 = cljs.core.nth.call(null,vec__23038,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23038,(1),null);var vec__23039 = G__23035__$1;var i1__$1 = cljs.core.nth.call(null,vec__23039,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23039,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13068__auto__)
{var temp__4126__auto___23048 = output_checker23021_23044.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___23048))
{var error__13070__auto___23049 = temp__4126__auto___23048;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13070__auto___23049)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23018_23041,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___23049], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___23040,output_schema23018_23041,input_schema23019_23042,input_checker23020_23043,output_checker23021_23044))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23018_23041,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23019_23042], null)));
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
var ufv___23128 = schema.utils.use_fn_validation;var output_schema23050_23129 = schema.core.Any;var input_schema23051_23130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker23052_23131 = schema.core.checker.call(null,input_schema23051_23130);var output_checker23053_23132 = schema.core.checker.call(null,output_schema23050_23129);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132){
return (function split_schema(G__23054,G__23055){var validate__13068__auto__ = ufv___23128.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___23133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23054,G__23055], null);var temp__4126__auto___23134 = input_checker23052_23131.call(null,args__13069__auto___23133);if(cljs.core.truth_(temp__4126__auto___23134))
{var error__13070__auto___23135 = temp__4126__auto___23134;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13070__auto___23135)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23051_23130,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___23133,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___23135], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__23054;var ks = G__23055;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4375__auto__ = ((function (ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132){
return (function iter__23092(s__23093){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132){
return (function (){var s__23093__$1 = s__23093;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23093__$1);if(temp__4126__auto__)
{var s__23093__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23093__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23093__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23095 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23094 = (0);while(true){
if((i__23094 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4373__auto__,i__23094);cljs.core.chunk_append.call(null,b__23095,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__23094,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23095,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132){
return (function iter__23112(s__23113){return (new cljs.core.LazySeq(null,((function (i__23094,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23095,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132){
return (function (){var s__23113__$1 = s__23113;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23113__$1);if(temp__4126__auto____$1)
{var s__23113__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23113__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first.call(null,s__23113__$2);var size__4374__auto____$1 = cljs.core.count.call(null,c__4373__auto____$1);var b__23115 = cljs.core.chunk_buffer.call(null,size__4374__auto____$1);if((function (){var i__23114 = (0);while(true){
if((i__23114 < size__4374__auto____$1))
{var vec__23118 = cljs.core._nth.call(null,c__4373__auto____$1,i__23114);var k = cljs.core.nth.call(null,vec__23118,(0),null);var v = cljs.core.nth.call(null,vec__23118,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23136 = (i__23114 + (1));
i__23114 = G__23136;
continue;
}
} else
{{
var G__23137 = (i__23114 + (1));
i__23114 = G__23137;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23115),iter__23112.call(null,cljs.core.chunk_rest.call(null,s__23113__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23115),null);
}
} else
{var vec__23119 = cljs.core.first.call(null,s__23113__$2);var k = cljs.core.nth.call(null,vec__23119,(0),null);var v = cljs.core.nth.call(null,vec__23119,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23112.call(null,cljs.core.rest.call(null,s__23113__$2)));
} else
{{
var G__23138 = cljs.core.rest.call(null,s__23113__$2);
s__23113__$1 = G__23138;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__23094,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23095,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132))
,null,null));
});})(i__23094,in_QMARK_,c__4373__auto__,size__4374__auto__,b__23095,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132))
;return iter__4375__auto__.call(null,s);
})()));
{
var G__23139 = (i__23094 + (1));
i__23094 = G__23139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23095),iter__23092.call(null,cljs.core.chunk_rest.call(null,s__23093__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23095),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__23093__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132){
return (function iter__23120(s__23121){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132){
return (function (){var s__23121__$1 = s__23121;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23121__$1);if(temp__4126__auto____$1)
{var s__23121__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23121__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23121__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23123 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23122 = (0);while(true){
if((i__23122 < size__4374__auto__))
{var vec__23126 = cljs.core._nth.call(null,c__4373__auto__,i__23122);var k = cljs.core.nth.call(null,vec__23126,(0),null);var v = cljs.core.nth.call(null,vec__23126,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23140 = (i__23122 + (1));
i__23122 = G__23140;
continue;
}
} else
{{
var G__23141 = (i__23122 + (1));
i__23122 = G__23141;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23123),iter__23120.call(null,cljs.core.chunk_rest.call(null,s__23121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23123),null);
}
} else
{var vec__23127 = cljs.core.first.call(null,s__23121__$2);var k = cljs.core.nth.call(null,vec__23127,(0),null);var v = cljs.core.nth.call(null,vec__23127,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23120.call(null,cljs.core.rest.call(null,s__23121__$2)));
} else
{{
var G__23142 = cljs.core.rest.call(null,s__23121__$2);
s__23121__$1 = G__23142;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132))
,null,null));
});})(in_QMARK_,s__23093__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132))
;return iter__4375__auto__.call(null,s);
})()),iter__23092.call(null,cljs.core.rest.call(null,s__23093__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132))
,null,null));
});})(ks__$1,validate__13068__auto__,ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132))
;return iter__4375__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___23143 = output_checker23053_23132.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___23143))
{var error__13070__auto___23144 = temp__4126__auto___23143;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13070__auto___23144)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23050_23129,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___23144], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___23128,output_schema23050_23129,input_schema23051_23130,input_checker23052_23131,output_checker23053_23132))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23050_23129,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23051_23130], null)));
var ufv___23175 = schema.utils.use_fn_validation;var output_schema23145_23176 = plumbing.fnk.schema.GraphIOSchemata;var input_schema23146_23177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23147_23178 = schema.core.checker.call(null,input_schema23146_23177);var output_checker23148_23179 = schema.core.checker.call(null,output_schema23145_23176);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23175,output_schema23145_23176,input_schema23146_23177,input_checker23147_23178,output_checker23148_23179){
return (function sequence_schemata(G__23149,G__23150){var validate__13068__auto__ = ufv___23175.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___23180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23149,G__23150], null);var temp__4126__auto___23181 = input_checker23147_23178.call(null,args__13069__auto___23180);if(cljs.core.truth_(temp__4126__auto___23181))
{var error__13070__auto___23182 = temp__4126__auto___23181;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13070__auto___23182)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23146_23177,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___23180,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___23182], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__23166 = G__23149;var vec__23168 = G__23166;var i1 = cljs.core.nth.call(null,vec__23168,(0),null);var o1 = cljs.core.nth.call(null,vec__23168,(1),null);var G__23167 = G__23150;var vec__23169 = G__23167;var k = cljs.core.nth.call(null,vec__23169,(0),null);var vec__23170 = cljs.core.nth.call(null,vec__23169,(1),null);var i2 = cljs.core.nth.call(null,vec__23170,(0),null);var o2 = cljs.core.nth.call(null,vec__23170,(1),null);var G__23166__$1 = G__23166;var G__23167__$1 = G__23167;while(true){
var vec__23171 = G__23166__$1;var i1__$1 = cljs.core.nth.call(null,vec__23171,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23171,(1),null);var vec__23172 = G__23167__$1;var k__$1 = cljs.core.nth.call(null,vec__23172,(0),null);var vec__23173 = cljs.core.nth.call(null,vec__23172,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__23173,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23173,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__23174 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__23174,(0),null);var unused = cljs.core.nth.call(null,vec__23174,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___23183 = output_checker23148_23179.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___23183))
{var error__13070__auto___23184 = temp__4126__auto___23183;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13070__auto___23184)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23145_23176,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___23184], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___23175,output_schema23145_23176,input_schema23146_23177,input_checker23147_23178,output_checker23148_23179))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23145_23176,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23146_23177], null)));
