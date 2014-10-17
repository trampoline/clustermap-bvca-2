// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__14598__14599__auto__){var G__27007 = p1__14598__14599__auto__;if(G__27007)
{var bit__8550__auto__ = null;if(cljs.core.truth_((function (){var or__7900__auto__ = bit__8550__auto__;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return G__27007.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__27007.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__27007);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__27007);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__27008_SHARP_){return (cljs.core.val.call(null,p1__27008_SHARP_) > (1));
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
var vec__27010 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__27010,(0),null);var v = cljs.core.nth.call(null,vec__27010,(1),null);var p = vec__27010;if(cljs.core.truth_(p))
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
var ufv___27016 = schema.utils.use_fn_validation;var output_schema27011_27017 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema27012_27018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker27013_27019 = schema.core.checker.call(null,input_schema27012_27018);var output_checker27014_27020 = schema.core.checker.call(null,output_schema27011_27017);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___27016,output_schema27011_27017,input_schema27012_27018,input_checker27013_27019,output_checker27014_27020){
return (function unwrap_schema_form_key(G__27015){var validate__14568__auto__ = ufv___27016.get_cell();if(cljs.core.truth_(validate__14568__auto__))
{var args__14569__auto___27021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27015], null);var temp__4126__auto___27022 = input_checker27013_27019.call(null,args__14569__auto___27021);if(cljs.core.truth_(temp__4126__auto___27022))
{var error__14570__auto___27023 = temp__4126__auto___27022;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__14570__auto___27023)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27012_27018,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27021,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27023], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var k = G__27015;while(true){
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
})();if(cljs.core.truth_(validate__14568__auto__))
{var temp__4126__auto___27024 = output_checker27014_27020.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27024))
{var error__14570__auto___27025 = temp__4126__auto___27024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__14570__auto___27025)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27011_27017,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27025], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27016,output_schema27011_27017,input_schema27012_27018,input_checker27013_27019,output_checker27014_27020))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema27011_27017,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27012_27018], null)));
var ufv___27031 = schema.utils.use_fn_validation;var output_schema27026_27032 = schema.core.Any;var input_schema27027_27033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker27028_27034 = schema.core.checker.call(null,input_schema27027_27033);var output_checker27029_27035 = schema.core.checker.call(null,output_schema27026_27032);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___27031,output_schema27026_27032,input_schema27027_27033,input_checker27028_27034,output_checker27029_27035){
return (function explicit_schema_key_map(G__27030){var validate__14568__auto__ = ufv___27031.get_cell();if(cljs.core.truth_(validate__14568__auto__))
{var args__14569__auto___27036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27030], null);var temp__4126__auto___27037 = input_checker27028_27034.call(null,args__14569__auto___27036);if(cljs.core.truth_(temp__4126__auto___27037))
{var error__14570__auto___27038 = temp__4126__auto___27037;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__14570__auto___27038)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27027_27033,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27036,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27038], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var s = G__27030;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__14568__auto__))
{var temp__4126__auto___27039 = output_checker27029_27035.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27039))
{var error__14570__auto___27040 = temp__4126__auto___27039;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__14570__auto___27040)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27026_27032,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27040], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27031,output_schema27026_27032,input_schema27027_27033,input_checker27028_27034,output_checker27029_27035))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema27026_27032,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27027_27033], null)));
var ufv___27046 = schema.utils.use_fn_validation;var output_schema27041_27047 = schema.core.Any;var input_schema27042_27048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker27043_27049 = schema.core.checker.call(null,input_schema27042_27048);var output_checker27044_27050 = schema.core.checker.call(null,output_schema27041_27047);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___27046,output_schema27041_27047,input_schema27042_27048,input_checker27043_27049,output_checker27044_27050){
return (function split_schema_keys(G__27045){var validate__14568__auto__ = ufv___27046.get_cell();if(cljs.core.truth_(validate__14568__auto__))
{var args__14569__auto___27051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27045], null);var temp__4126__auto___27052 = input_checker27043_27049.call(null,args__14569__auto___27051);if(cljs.core.truth_(temp__4126__auto___27052))
{var error__14570__auto___27053 = temp__4126__auto___27052;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__14570__auto___27053)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27042_27048,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27051,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27053], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var s = G__27045;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__14568__auto__))
{var temp__4126__auto___27054 = output_checker27044_27050.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27054))
{var error__14570__auto___27055 = temp__4126__auto___27054;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__14570__auto___27055)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27041_27047,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27055], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27046,output_schema27041_27047,input_schema27042_27048,input_checker27043_27049,output_checker27044_27050))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema27041_27047,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27042_27048], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__27059){var vec__27060 = p__27059;var k = cljs.core.nth.call(null,vec__27060,(0),null);var v = cljs.core.nth.call(null,vec__27060,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__27061 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__27061,(0),null);var ov = cljs.core.nth.call(null,vec__27061,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__27062){
var key_project = cljs.core.first(arglist__27062);
arglist__27062 = cljs.core.next(arglist__27062);
var key_combine = cljs.core.first(arglist__27062);
arglist__27062 = cljs.core.next(arglist__27062);
var val_combine = cljs.core.first(arglist__27062);
var maps = cljs.core.rest(arglist__27062);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___27070 = schema.utils.use_fn_validation;var output_schema27064_27071 = plumbing.fnk.schema.InputSchema;var input_schema27065_27072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker27066_27073 = schema.core.checker.call(null,input_schema27065_27072);var output_checker27067_27074 = schema.core.checker.call(null,output_schema27064_27071);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074){
return (function union_input_schemata(G__27068,G__27069){var validate__14568__auto__ = ufv___27070.get_cell();if(cljs.core.truth_(validate__14568__auto__))
{var args__14569__auto___27075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27068,G__27069], null);var temp__4126__auto___27076 = input_checker27066_27073.call(null,args__14569__auto___27075);if(cljs.core.truth_(temp__4126__auto___27076))
{var error__14570__auto___27077 = temp__4126__auto___27076;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__14570__auto___27077)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27065_27072,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27075,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27077], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var i1 = G__27068;var i2 = G__27069;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__14568__auto__,ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074){
return (function (p1__27063_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__27063_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__27063_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__14568__auto__,ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074))
,((function (validate__14568__auto__,ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074){
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
});})(validate__14568__auto__,ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074))
,((function (validate__14568__auto__,ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__14568__auto__,ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__14568__auto__))
{var temp__4126__auto___27078 = output_checker27067_27074.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27078))
{var error__14570__auto___27079 = temp__4126__auto___27078;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__14570__auto___27079)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27064_27071,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27079], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27070,output_schema27064_27071,input_schema27065_27072,input_checker27066_27073,output_checker27067_27074))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema27064_27071,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27065_27072], null)));
var ufv___27085 = schema.utils.use_fn_validation;var output_schema27080_27086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema27081_27087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker27082_27088 = schema.core.checker.call(null,input_schema27081_27087);var output_checker27083_27089 = schema.core.checker.call(null,output_schema27080_27086);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___27085,output_schema27080_27086,input_schema27081_27087,input_checker27082_27088,output_checker27083_27089){
return (function required_toplevel_keys(G__27084){var validate__14568__auto__ = ufv___27085.get_cell();if(cljs.core.truth_(validate__14568__auto__))
{var args__14569__auto___27090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27084], null);var temp__4126__auto___27091 = input_checker27082_27088.call(null,args__14569__auto___27090);if(cljs.core.truth_(temp__4126__auto___27091))
{var error__14570__auto___27092 = temp__4126__auto___27091;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__14570__auto___27092)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27081_27087,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27090,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27092], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var input_schema = G__27084;while(true){
return cljs.core.keep.call(null,((function (validate__14568__auto__,ufv___27085,output_schema27080_27086,input_schema27081_27087,input_checker27082_27088,output_checker27083_27089){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__14568__auto__,ufv___27085,output_schema27080_27086,input_schema27081_27087,input_checker27082_27088,output_checker27083_27089))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__14568__auto__))
{var temp__4126__auto___27093 = output_checker27083_27089.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27093))
{var error__14570__auto___27094 = temp__4126__auto___27093;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__14570__auto___27094)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27080_27086,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27094], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27085,output_schema27080_27086,input_schema27081_27087,input_checker27082_27088,output_checker27083_27089))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema27080_27086,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27081_27087], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8625__auto__ = (function iter__27103(s__27104){return (new cljs.core.LazySeq(null,(function (){var s__27104__$1 = s__27104;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27104__$1);if(temp__4126__auto__)
{var s__27104__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27104__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27104__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27106 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27105 = (0);while(true){
if((i__27105 < size__8624__auto__))
{var vec__27109 = cljs.core._nth.call(null,c__8623__auto__,i__27105);var k = cljs.core.nth.call(null,vec__27109,(0),null);var v = cljs.core.nth.call(null,vec__27109,(1),null);cljs.core.chunk_append.call(null,b__27106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__27111 = (i__27105 + (1));
i__27105 = G__27111;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27106),iter__27103.call(null,cljs.core.chunk_rest.call(null,s__27104__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27106),null);
}
} else
{var vec__27110 = cljs.core.first.call(null,s__27104__$2);var k = cljs.core.nth.call(null,vec__27110,(0),null);var v = cljs.core.nth.call(null,vec__27110,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__27103.call(null,cljs.core.rest.call(null,s__27104__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8625__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8625__auto__ = (function iter__27120(s__27121){return (new cljs.core.LazySeq(null,(function (){var s__27121__$1 = s__27121;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27121__$1);if(temp__4126__auto__)
{var s__27121__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27121__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27121__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27123 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27122 = (0);while(true){
if((i__27122 < size__8624__auto__))
{var vec__27126 = cljs.core._nth.call(null,c__8623__auto__,i__27122);var k = cljs.core.nth.call(null,vec__27126,(0),null);var v = cljs.core.nth.call(null,vec__27126,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__27123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__27128 = (i__27122 + (1));
i__27122 = G__27128;
continue;
}
} else
{{
var G__27129 = (i__27122 + (1));
i__27122 = G__27129;
continue;
}
}
} else
{{
var G__27130 = (i__27122 + (1));
i__27122 = G__27130;
continue;
}
}
} else
{{
var G__27131 = (i__27122 + (1));
i__27122 = G__27131;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27123),iter__27120.call(null,cljs.core.chunk_rest.call(null,s__27121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27123),null);
}
} else
{var vec__27127 = cljs.core.first.call(null,s__27121__$2);var k = cljs.core.nth.call(null,vec__27127,(0),null);var v = cljs.core.nth.call(null,vec__27127,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__27120.call(null,cljs.core.rest.call(null,s__27121__$2)));
} else
{{
var G__27132 = cljs.core.rest.call(null,s__27121__$2);
s__27121__$1 = G__27132;
continue;
}
}
} else
{{
var G__27133 = cljs.core.rest.call(null,s__27121__$2);
s__27121__$1 = G__27133;
continue;
}
}
} else
{{
var G__27134 = cljs.core.rest.call(null,s__27121__$2);
s__27121__$1 = G__27134;
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
});return iter__8625__auto__.call(null,input_schema);
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
var ufv___27157 = schema.utils.use_fn_validation;var output_schema27135_27158 = schema.core.Any;var input_schema27136_27159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker27137_27160 = schema.core.checker.call(null,input_schema27136_27159);var output_checker27138_27161 = schema.core.checker.call(null,output_schema27135_27158);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___27157,output_schema27135_27158,input_schema27136_27159,input_checker27137_27160,output_checker27138_27161){
return (function compose_schemata(G__27139,G__27140){var validate__14568__auto__ = true;if(validate__14568__auto__)
{var args__14569__auto___27162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27139,G__27140], null);var temp__4126__auto___27163 = input_checker27137_27160.call(null,args__14569__auto___27162);if(cljs.core.truth_(temp__4126__auto___27163))
{var error__14570__auto___27164 = temp__4126__auto___27163;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__14570__auto___27164)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27136_27159,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27162,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27164], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var G__27151 = G__27139;var vec__27153 = G__27151;var i2 = cljs.core.nth.call(null,vec__27153,(0),null);var o2 = cljs.core.nth.call(null,vec__27153,(1),null);var G__27152 = G__27140;var vec__27154 = G__27152;var i1 = cljs.core.nth.call(null,vec__27154,(0),null);var o1 = cljs.core.nth.call(null,vec__27154,(1),null);var G__27151__$1 = G__27151;var G__27152__$1 = G__27152;while(true){
var vec__27155 = G__27151__$1;var i2__$1 = cljs.core.nth.call(null,vec__27155,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__27155,(1),null);var vec__27156 = G__27152__$1;var i1__$1 = cljs.core.nth.call(null,vec__27156,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__27156,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__14568__auto__)
{var temp__4126__auto___27165 = output_checker27138_27161.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27165))
{var error__14570__auto___27166 = temp__4126__auto___27165;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__14570__auto___27166)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27135_27158,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27166], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27157,output_schema27135_27158,input_schema27136_27159,input_checker27137_27160,output_checker27138_27161))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema27135_27158,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27136_27159], null)));
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
var ufv___27245 = schema.utils.use_fn_validation;var output_schema27167_27246 = schema.core.Any;var input_schema27168_27247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker27169_27248 = schema.core.checker.call(null,input_schema27168_27247);var output_checker27170_27249 = schema.core.checker.call(null,output_schema27167_27246);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249){
return (function split_schema(G__27171,G__27172){var validate__14568__auto__ = ufv___27245.get_cell();if(cljs.core.truth_(validate__14568__auto__))
{var args__14569__auto___27250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27171,G__27172], null);var temp__4126__auto___27251 = input_checker27169_27248.call(null,args__14569__auto___27250);if(cljs.core.truth_(temp__4126__auto___27251))
{var error__14570__auto___27252 = temp__4126__auto___27251;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__14570__auto___27252)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27168_27247,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27250,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27252], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var s = G__27171;var ks = G__27172;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__8625__auto__ = ((function (ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249){
return (function iter__27209(s__27210){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249){
return (function (){var s__27210__$1 = s__27210;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27210__$1);if(temp__4126__auto__)
{var s__27210__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27210__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27210__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27212 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27211 = (0);while(true){
if((i__27211 < size__8624__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__8623__auto__,i__27211);cljs.core.chunk_append.call(null,b__27212,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8625__auto__ = ((function (i__27211,in_QMARK_,c__8623__auto__,size__8624__auto__,b__27212,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249){
return (function iter__27229(s__27230){return (new cljs.core.LazySeq(null,((function (i__27211,in_QMARK_,c__8623__auto__,size__8624__auto__,b__27212,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249){
return (function (){var s__27230__$1 = s__27230;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27230__$1);if(temp__4126__auto____$1)
{var s__27230__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27230__$2))
{var c__8623__auto____$1 = cljs.core.chunk_first.call(null,s__27230__$2);var size__8624__auto____$1 = cljs.core.count.call(null,c__8623__auto____$1);var b__27232 = cljs.core.chunk_buffer.call(null,size__8624__auto____$1);if((function (){var i__27231 = (0);while(true){
if((i__27231 < size__8624__auto____$1))
{var vec__27235 = cljs.core._nth.call(null,c__8623__auto____$1,i__27231);var k = cljs.core.nth.call(null,vec__27235,(0),null);var v = cljs.core.nth.call(null,vec__27235,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__27232,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__27253 = (i__27231 + (1));
i__27231 = G__27253;
continue;
}
} else
{{
var G__27254 = (i__27231 + (1));
i__27231 = G__27254;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27232),iter__27229.call(null,cljs.core.chunk_rest.call(null,s__27230__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27232),null);
}
} else
{var vec__27236 = cljs.core.first.call(null,s__27230__$2);var k = cljs.core.nth.call(null,vec__27236,(0),null);var v = cljs.core.nth.call(null,vec__27236,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__27229.call(null,cljs.core.rest.call(null,s__27230__$2)));
} else
{{
var G__27255 = cljs.core.rest.call(null,s__27230__$2);
s__27230__$1 = G__27255;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__27211,in_QMARK_,c__8623__auto__,size__8624__auto__,b__27212,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249))
,null,null));
});})(i__27211,in_QMARK_,c__8623__auto__,size__8624__auto__,b__27212,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249))
;return iter__8625__auto__.call(null,s);
})()));
{
var G__27256 = (i__27211 + (1));
i__27211 = G__27256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27212),iter__27209.call(null,cljs.core.chunk_rest.call(null,s__27210__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27212),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__27210__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8625__auto__ = ((function (in_QMARK_,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249){
return (function iter__27237(s__27238){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249){
return (function (){var s__27238__$1 = s__27238;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27238__$1);if(temp__4126__auto____$1)
{var s__27238__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27238__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27238__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27240 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27239 = (0);while(true){
if((i__27239 < size__8624__auto__))
{var vec__27243 = cljs.core._nth.call(null,c__8623__auto__,i__27239);var k = cljs.core.nth.call(null,vec__27243,(0),null);var v = cljs.core.nth.call(null,vec__27243,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__27240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__27257 = (i__27239 + (1));
i__27239 = G__27257;
continue;
}
} else
{{
var G__27258 = (i__27239 + (1));
i__27239 = G__27258;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27240),iter__27237.call(null,cljs.core.chunk_rest.call(null,s__27238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27240),null);
}
} else
{var vec__27244 = cljs.core.first.call(null,s__27238__$2);var k = cljs.core.nth.call(null,vec__27244,(0),null);var v = cljs.core.nth.call(null,vec__27244,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__27237.call(null,cljs.core.rest.call(null,s__27238__$2)));
} else
{{
var G__27259 = cljs.core.rest.call(null,s__27238__$2);
s__27238__$1 = G__27259;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249))
,null,null));
});})(in_QMARK_,s__27210__$2,temp__4126__auto__,ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249))
;return iter__8625__auto__.call(null,s);
})()),iter__27209.call(null,cljs.core.rest.call(null,s__27210__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249))
,null,null));
});})(ks__$1,validate__14568__auto__,ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249))
;return iter__8625__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__14568__auto__))
{var temp__4126__auto___27260 = output_checker27170_27249.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27260))
{var error__14570__auto___27261 = temp__4126__auto___27260;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__14570__auto___27261)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27167_27246,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27261], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27245,output_schema27167_27246,input_schema27168_27247,input_checker27169_27248,output_checker27170_27249))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema27167_27246,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27168_27247], null)));
var ufv___27292 = schema.utils.use_fn_validation;var output_schema27262_27293 = plumbing.fnk.schema.GraphIOSchemata;var input_schema27263_27294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker27264_27295 = schema.core.checker.call(null,input_schema27263_27294);var output_checker27265_27296 = schema.core.checker.call(null,output_schema27262_27293);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___27292,output_schema27262_27293,input_schema27263_27294,input_checker27264_27295,output_checker27265_27296){
return (function sequence_schemata(G__27266,G__27267){var validate__14568__auto__ = ufv___27292.get_cell();if(cljs.core.truth_(validate__14568__auto__))
{var args__14569__auto___27297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27266,G__27267], null);var temp__4126__auto___27298 = input_checker27264_27295.call(null,args__14569__auto___27297);if(cljs.core.truth_(temp__4126__auto___27298))
{var error__14570__auto___27299 = temp__4126__auto___27298;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__14570__auto___27299)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27263_27294,new cljs.core.Keyword(null,"value","value",305978217),args__14569__auto___27297,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27299], null));
} else
{}
} else
{}
var o__14571__auto__ = (function (){var G__27283 = G__27266;var vec__27285 = G__27283;var i1 = cljs.core.nth.call(null,vec__27285,(0),null);var o1 = cljs.core.nth.call(null,vec__27285,(1),null);var G__27284 = G__27267;var vec__27286 = G__27284;var k = cljs.core.nth.call(null,vec__27286,(0),null);var vec__27287 = cljs.core.nth.call(null,vec__27286,(1),null);var i2 = cljs.core.nth.call(null,vec__27287,(0),null);var o2 = cljs.core.nth.call(null,vec__27287,(1),null);var G__27283__$1 = G__27283;var G__27284__$1 = G__27284;while(true){
var vec__27288 = G__27283__$1;var i1__$1 = cljs.core.nth.call(null,vec__27288,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__27288,(1),null);var vec__27289 = G__27284__$1;var k__$1 = cljs.core.nth.call(null,vec__27289,(0),null);var vec__27290 = cljs.core.nth.call(null,vec__27289,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__27290,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__27290,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__27291 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__27291,(0),null);var unused = cljs.core.nth.call(null,vec__27291,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__14568__auto__))
{var temp__4126__auto___27300 = output_checker27265_27296.call(null,o__14571__auto__);if(cljs.core.truth_(temp__4126__auto___27300))
{var error__14570__auto___27301 = temp__4126__auto___27300;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__14570__auto___27301)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27262_27293,new cljs.core.Keyword(null,"value","value",305978217),o__14571__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__14570__auto___27301], null));
} else
{}
} else
{}
return o__14571__auto__;
});})(ufv___27292,output_schema27262_27293,input_schema27263_27294,input_checker27264_27295,output_checker27265_27296))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema27262_27293,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27263_27294], null)));

//# sourceMappingURL=schema.js.map