// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10547__10548__auto__){var G__22956 = p1__10547__10548__auto__;if(G__22956)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__22956.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__22956.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22956);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22956);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__22957_SHARP_){return (cljs.core.val.call(null,p1__22957_SHARP_) > (1));
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
var vec__22959 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__22959,(0),null);var v = cljs.core.nth.call(null,vec__22959,(1),null);var p = vec__22959;if(cljs.core.truth_(p))
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
var ufv___22965 = schema.utils.use_fn_validation;var output_schema22960_22966 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema22961_22967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker22962_22968 = schema.core.checker.call(null,input_schema22961_22967);var output_checker22963_22969 = schema.core.checker.call(null,output_schema22960_22966);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22965,output_schema22960_22966,input_schema22961_22967,input_checker22962_22968,output_checker22963_22969){
return (function unwrap_schema_form_key(G__22964){var validate__10517__auto__ = ufv___22965.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___22970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22964], null);var temp__4126__auto___22971 = input_checker22962_22968.call(null,args__10518__auto___22970);if(cljs.core.truth_(temp__4126__auto___22971))
{var error__10519__auto___22972 = temp__4126__auto___22971;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___22972)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22961_22967,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___22970,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___22972], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__22964;while(true){
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
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___22973 = output_checker22963_22969.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___22973))
{var error__10519__auto___22974 = temp__4126__auto___22973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___22974)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22960_22966,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___22974], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___22965,output_schema22960_22966,input_schema22961_22967,input_checker22962_22968,output_checker22963_22969))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema22960_22966,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22961_22967], null)));
var ufv___22980 = schema.utils.use_fn_validation;var output_schema22975_22981 = schema.core.Any;var input_schema22976_22982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22977_22983 = schema.core.checker.call(null,input_schema22976_22982);var output_checker22978_22984 = schema.core.checker.call(null,output_schema22975_22981);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22980,output_schema22975_22981,input_schema22976_22982,input_checker22977_22983,output_checker22978_22984){
return (function explicit_schema_key_map(G__22979){var validate__10517__auto__ = ufv___22980.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___22985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22979], null);var temp__4126__auto___22986 = input_checker22977_22983.call(null,args__10518__auto___22985);if(cljs.core.truth_(temp__4126__auto___22986))
{var error__10519__auto___22987 = temp__4126__auto___22986;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___22987)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22976_22982,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___22985,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___22987], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__22979;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___22988 = output_checker22978_22984.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___22988))
{var error__10519__auto___22989 = temp__4126__auto___22988;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___22989)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22975_22981,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___22989], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___22980,output_schema22975_22981,input_schema22976_22982,input_checker22977_22983,output_checker22978_22984))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema22975_22981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22976_22982], null)));
var ufv___22995 = schema.utils.use_fn_validation;var output_schema22990_22996 = schema.core.Any;var input_schema22991_22997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22992_22998 = schema.core.checker.call(null,input_schema22991_22997);var output_checker22993_22999 = schema.core.checker.call(null,output_schema22990_22996);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22995,output_schema22990_22996,input_schema22991_22997,input_checker22992_22998,output_checker22993_22999){
return (function split_schema_keys(G__22994){var validate__10517__auto__ = ufv___22995.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22994], null);var temp__4126__auto___23001 = input_checker22992_22998.call(null,args__10518__auto___23000);if(cljs.core.truth_(temp__4126__auto___23001))
{var error__10519__auto___23002 = temp__4126__auto___23001;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___23002)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22991_22997,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23000,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23002], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__22994;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23003 = output_checker22993_22999.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23003))
{var error__10519__auto___23004 = temp__4126__auto___23003;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___23004)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22990_22996,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23004], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___22995,output_schema22990_22996,input_schema22991_22997,input_checker22992_22998,output_checker22993_22999))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema22990_22996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22991_22997], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__23008){var vec__23009 = p__23008;var k = cljs.core.nth.call(null,vec__23009,(0),null);var v = cljs.core.nth.call(null,vec__23009,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__23010 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__23010,(0),null);var ov = cljs.core.nth.call(null,vec__23010,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__23011){
var key_project = cljs.core.first(arglist__23011);
arglist__23011 = cljs.core.next(arglist__23011);
var key_combine = cljs.core.first(arglist__23011);
arglist__23011 = cljs.core.next(arglist__23011);
var val_combine = cljs.core.first(arglist__23011);
var maps = cljs.core.rest(arglist__23011);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___23019 = schema.utils.use_fn_validation;var output_schema23013_23020 = plumbing.fnk.schema.InputSchema;var input_schema23014_23021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker23015_23022 = schema.core.checker.call(null,input_schema23014_23021);var output_checker23016_23023 = schema.core.checker.call(null,output_schema23013_23020);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023){
return (function union_input_schemata(G__23017,G__23018){var validate__10517__auto__ = ufv___23019.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23017,G__23018], null);var temp__4126__auto___23025 = input_checker23015_23022.call(null,args__10518__auto___23024);if(cljs.core.truth_(temp__4126__auto___23025))
{var error__10519__auto___23026 = temp__4126__auto___23025;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___23026)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23014_23021,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23024,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23026], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__23017;var i2 = G__23018;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10517__auto__,ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023){
return (function (p1__23012_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__23012_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__23012_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10517__auto__,ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023))
,((function (validate__10517__auto__,ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023){
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
});})(validate__10517__auto__,ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023))
,((function (validate__10517__auto__,ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10517__auto__,ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23027 = output_checker23016_23023.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23027))
{var error__10519__auto___23028 = temp__4126__auto___23027;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___23028)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23013_23020,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23028], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23019,output_schema23013_23020,input_schema23014_23021,input_checker23015_23022,output_checker23016_23023))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema23013_23020,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23014_23021], null)));
var ufv___23034 = schema.utils.use_fn_validation;var output_schema23029_23035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema23030_23036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker23031_23037 = schema.core.checker.call(null,input_schema23030_23036);var output_checker23032_23038 = schema.core.checker.call(null,output_schema23029_23035);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23034,output_schema23029_23035,input_schema23030_23036,input_checker23031_23037,output_checker23032_23038){
return (function required_toplevel_keys(G__23033){var validate__10517__auto__ = ufv___23034.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23033], null);var temp__4126__auto___23040 = input_checker23031_23037.call(null,args__10518__auto___23039);if(cljs.core.truth_(temp__4126__auto___23040))
{var error__10519__auto___23041 = temp__4126__auto___23040;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___23041)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23030_23036,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23039,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23041], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__23033;while(true){
return cljs.core.keep.call(null,((function (validate__10517__auto__,ufv___23034,output_schema23029_23035,input_schema23030_23036,input_checker23031_23037,output_checker23032_23038){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___23034,output_schema23029_23035,input_schema23030_23036,input_checker23031_23037,output_checker23032_23038))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23042 = output_checker23032_23038.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23042))
{var error__10519__auto___23043 = temp__4126__auto___23042;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___23043)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23029_23035,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23043], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23034,output_schema23029_23035,input_schema23030_23036,input_checker23031_23037,output_checker23032_23038))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema23029_23035,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23030_23036], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__23052(s__23053){return (new cljs.core.LazySeq(null,(function (){var s__23053__$1 = s__23053;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23053__$1);if(temp__4126__auto__)
{var s__23053__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23053__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23053__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23055 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23054 = (0);while(true){
if((i__23054 < size__4282__auto__))
{var vec__23058 = cljs.core._nth.call(null,c__4281__auto__,i__23054);var k = cljs.core.nth.call(null,vec__23058,(0),null);var v = cljs.core.nth.call(null,vec__23058,(1),null);cljs.core.chunk_append.call(null,b__23055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__23060 = (i__23054 + (1));
i__23054 = G__23060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23055),iter__23052.call(null,cljs.core.chunk_rest.call(null,s__23053__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23055),null);
}
} else
{var vec__23059 = cljs.core.first.call(null,s__23053__$2);var k = cljs.core.nth.call(null,vec__23059,(0),null);var v = cljs.core.nth.call(null,vec__23059,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__23052.call(null,cljs.core.rest.call(null,s__23053__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__23069(s__23070){return (new cljs.core.LazySeq(null,(function (){var s__23070__$1 = s__23070;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23070__$1);if(temp__4126__auto__)
{var s__23070__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23070__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23070__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23072 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23071 = (0);while(true){
if((i__23071 < size__4282__auto__))
{var vec__23075 = cljs.core._nth.call(null,c__4281__auto__,i__23071);var k = cljs.core.nth.call(null,vec__23075,(0),null);var v = cljs.core.nth.call(null,vec__23075,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__23072,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__23077 = (i__23071 + (1));
i__23071 = G__23077;
continue;
}
} else
{{
var G__23078 = (i__23071 + (1));
i__23071 = G__23078;
continue;
}
}
} else
{{
var G__23079 = (i__23071 + (1));
i__23071 = G__23079;
continue;
}
}
} else
{{
var G__23080 = (i__23071 + (1));
i__23071 = G__23080;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23072),iter__23069.call(null,cljs.core.chunk_rest.call(null,s__23070__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23072),null);
}
} else
{var vec__23076 = cljs.core.first.call(null,s__23070__$2);var k = cljs.core.nth.call(null,vec__23076,(0),null);var v = cljs.core.nth.call(null,vec__23076,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23069.call(null,cljs.core.rest.call(null,s__23070__$2)));
} else
{{
var G__23081 = cljs.core.rest.call(null,s__23070__$2);
s__23070__$1 = G__23081;
continue;
}
}
} else
{{
var G__23082 = cljs.core.rest.call(null,s__23070__$2);
s__23070__$1 = G__23082;
continue;
}
}
} else
{{
var G__23083 = cljs.core.rest.call(null,s__23070__$2);
s__23070__$1 = G__23083;
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
var ufv___23106 = schema.utils.use_fn_validation;var output_schema23084_23107 = schema.core.Any;var input_schema23085_23108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23086_23109 = schema.core.checker.call(null,input_schema23085_23108);var output_checker23087_23110 = schema.core.checker.call(null,output_schema23084_23107);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23106,output_schema23084_23107,input_schema23085_23108,input_checker23086_23109,output_checker23087_23110){
return (function compose_schemata(G__23088,G__23089){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___23111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23088,G__23089], null);var temp__4126__auto___23112 = input_checker23086_23109.call(null,args__10518__auto___23111);if(cljs.core.truth_(temp__4126__auto___23112))
{var error__10519__auto___23113 = temp__4126__auto___23112;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___23113)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23085_23108,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23111,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23113], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__23100 = G__23088;var vec__23102 = G__23100;var i2 = cljs.core.nth.call(null,vec__23102,(0),null);var o2 = cljs.core.nth.call(null,vec__23102,(1),null);var G__23101 = G__23089;var vec__23103 = G__23101;var i1 = cljs.core.nth.call(null,vec__23103,(0),null);var o1 = cljs.core.nth.call(null,vec__23103,(1),null);var G__23100__$1 = G__23100;var G__23101__$1 = G__23101;while(true){
var vec__23104 = G__23100__$1;var i2__$1 = cljs.core.nth.call(null,vec__23104,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23104,(1),null);var vec__23105 = G__23101__$1;var i1__$1 = cljs.core.nth.call(null,vec__23105,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23105,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___23114 = output_checker23087_23110.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23114))
{var error__10519__auto___23115 = temp__4126__auto___23114;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___23115)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23084_23107,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23115], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23106,output_schema23084_23107,input_schema23085_23108,input_checker23086_23109,output_checker23087_23110))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23084_23107,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23085_23108], null)));
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
var ufv___23194 = schema.utils.use_fn_validation;var output_schema23116_23195 = schema.core.Any;var input_schema23117_23196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker23118_23197 = schema.core.checker.call(null,input_schema23117_23196);var output_checker23119_23198 = schema.core.checker.call(null,output_schema23116_23195);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198){
return (function split_schema(G__23120,G__23121){var validate__10517__auto__ = ufv___23194.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23120,G__23121], null);var temp__4126__auto___23200 = input_checker23118_23197.call(null,args__10518__auto___23199);if(cljs.core.truth_(temp__4126__auto___23200))
{var error__10519__auto___23201 = temp__4126__auto___23200;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___23201)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23117_23196,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23199,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23201], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__23120;var ks = G__23121;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198){
return (function iter__23158(s__23159){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198){
return (function (){var s__23159__$1 = s__23159;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23159__$1);if(temp__4126__auto__)
{var s__23159__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23159__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23159__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23161 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23160 = (0);while(true){
if((i__23160 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__23160);cljs.core.chunk_append.call(null,b__23161,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__23160,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23161,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198){
return (function iter__23178(s__23179){return (new cljs.core.LazySeq(null,((function (i__23160,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23161,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198){
return (function (){var s__23179__$1 = s__23179;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23179__$1);if(temp__4126__auto____$1)
{var s__23179__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23179__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__23179__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__23181 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__23180 = (0);while(true){
if((i__23180 < size__4282__auto____$1))
{var vec__23184 = cljs.core._nth.call(null,c__4281__auto____$1,i__23180);var k = cljs.core.nth.call(null,vec__23184,(0),null);var v = cljs.core.nth.call(null,vec__23184,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23202 = (i__23180 + (1));
i__23180 = G__23202;
continue;
}
} else
{{
var G__23203 = (i__23180 + (1));
i__23180 = G__23203;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23181),iter__23178.call(null,cljs.core.chunk_rest.call(null,s__23179__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23181),null);
}
} else
{var vec__23185 = cljs.core.first.call(null,s__23179__$2);var k = cljs.core.nth.call(null,vec__23185,(0),null);var v = cljs.core.nth.call(null,vec__23185,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23178.call(null,cljs.core.rest.call(null,s__23179__$2)));
} else
{{
var G__23204 = cljs.core.rest.call(null,s__23179__$2);
s__23179__$1 = G__23204;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__23160,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23161,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198))
,null,null));
});})(i__23160,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23161,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__23205 = (i__23160 + (1));
i__23160 = G__23205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23161),iter__23158.call(null,cljs.core.chunk_rest.call(null,s__23159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23161),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__23159__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198){
return (function iter__23186(s__23187){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198){
return (function (){var s__23187__$1 = s__23187;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23187__$1);if(temp__4126__auto____$1)
{var s__23187__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23187__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23187__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23189 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23188 = (0);while(true){
if((i__23188 < size__4282__auto__))
{var vec__23192 = cljs.core._nth.call(null,c__4281__auto__,i__23188);var k = cljs.core.nth.call(null,vec__23192,(0),null);var v = cljs.core.nth.call(null,vec__23192,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23206 = (i__23188 + (1));
i__23188 = G__23206;
continue;
}
} else
{{
var G__23207 = (i__23188 + (1));
i__23188 = G__23207;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23189),iter__23186.call(null,cljs.core.chunk_rest.call(null,s__23187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23189),null);
}
} else
{var vec__23193 = cljs.core.first.call(null,s__23187__$2);var k = cljs.core.nth.call(null,vec__23193,(0),null);var v = cljs.core.nth.call(null,vec__23193,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23186.call(null,cljs.core.rest.call(null,s__23187__$2)));
} else
{{
var G__23208 = cljs.core.rest.call(null,s__23187__$2);
s__23187__$1 = G__23208;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198))
,null,null));
});})(in_QMARK_,s__23159__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198))
;return iter__4283__auto__.call(null,s);
})()),iter__23158.call(null,cljs.core.rest.call(null,s__23159__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23209 = output_checker23119_23198.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23209))
{var error__10519__auto___23210 = temp__4126__auto___23209;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___23210)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23116_23195,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23210], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23194,output_schema23116_23195,input_schema23117_23196,input_checker23118_23197,output_checker23119_23198))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23116_23195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23117_23196], null)));
var ufv___23241 = schema.utils.use_fn_validation;var output_schema23211_23242 = plumbing.fnk.schema.GraphIOSchemata;var input_schema23212_23243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23213_23244 = schema.core.checker.call(null,input_schema23212_23243);var output_checker23214_23245 = schema.core.checker.call(null,output_schema23211_23242);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23241,output_schema23211_23242,input_schema23212_23243,input_checker23213_23244,output_checker23214_23245){
return (function sequence_schemata(G__23215,G__23216){var validate__10517__auto__ = ufv___23241.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23215,G__23216], null);var temp__4126__auto___23247 = input_checker23213_23244.call(null,args__10518__auto___23246);if(cljs.core.truth_(temp__4126__auto___23247))
{var error__10519__auto___23248 = temp__4126__auto___23247;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___23248)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23212_23243,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23246,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23248], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__23232 = G__23215;var vec__23234 = G__23232;var i1 = cljs.core.nth.call(null,vec__23234,(0),null);var o1 = cljs.core.nth.call(null,vec__23234,(1),null);var G__23233 = G__23216;var vec__23235 = G__23233;var k = cljs.core.nth.call(null,vec__23235,(0),null);var vec__23236 = cljs.core.nth.call(null,vec__23235,(1),null);var i2 = cljs.core.nth.call(null,vec__23236,(0),null);var o2 = cljs.core.nth.call(null,vec__23236,(1),null);var G__23232__$1 = G__23232;var G__23233__$1 = G__23233;while(true){
var vec__23237 = G__23232__$1;var i1__$1 = cljs.core.nth.call(null,vec__23237,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23237,(1),null);var vec__23238 = G__23233__$1;var k__$1 = cljs.core.nth.call(null,vec__23238,(0),null);var vec__23239 = cljs.core.nth.call(null,vec__23238,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__23239,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23239,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__23240 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__23240,(0),null);var unused = cljs.core.nth.call(null,vec__23240,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23249 = output_checker23214_23245.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23249))
{var error__10519__auto___23250 = temp__4126__auto___23249;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___23250)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23211_23242,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23250], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23241,output_schema23211_23242,input_schema23212_23243,input_checker23213_23244,output_checker23214_23245))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23211_23242,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23212_23243], null)));
