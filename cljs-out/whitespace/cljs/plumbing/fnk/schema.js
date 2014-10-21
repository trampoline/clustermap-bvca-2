// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__12751__12752__auto__){var G__22095 = p1__12751__12752__auto__;if(G__22095)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__22095.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__22095.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22095);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22095);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__22096_SHARP_){return (cljs.core.val.call(null,p1__22096_SHARP_) > (1));
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
var vec__22098 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__22098,(0),null);var v = cljs.core.nth.call(null,vec__22098,(1),null);var p = vec__22098;if(cljs.core.truth_(p))
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
var ufv___22104 = schema.utils.use_fn_validation;var output_schema22099_22105 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema22100_22106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker22101_22107 = schema.core.checker.call(null,input_schema22100_22106);var output_checker22102_22108 = schema.core.checker.call(null,output_schema22099_22105);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22104,output_schema22099_22105,input_schema22100_22106,input_checker22101_22107,output_checker22102_22108){
return (function unwrap_schema_form_key(G__22103){var validate__12721__auto__ = ufv___22104.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___22109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22103], null);var temp__4126__auto___22110 = input_checker22101_22107.call(null,args__12722__auto___22109);if(cljs.core.truth_(temp__4126__auto___22110))
{var error__12723__auto___22111 = temp__4126__auto___22110;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12723__auto___22111)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22100_22106,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22109,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22111], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var k = G__22103;while(true){
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
{var temp__4126__auto___22112 = output_checker22102_22108.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22112))
{var error__12723__auto___22113 = temp__4126__auto___22112;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__12723__auto___22113)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22099_22105,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22113], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22104,output_schema22099_22105,input_schema22100_22106,input_checker22101_22107,output_checker22102_22108))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema22099_22105,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22100_22106], null)));
var ufv___22119 = schema.utils.use_fn_validation;var output_schema22114_22120 = schema.core.Any;var input_schema22115_22121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22116_22122 = schema.core.checker.call(null,input_schema22115_22121);var output_checker22117_22123 = schema.core.checker.call(null,output_schema22114_22120);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22119,output_schema22114_22120,input_schema22115_22121,input_checker22116_22122,output_checker22117_22123){
return (function explicit_schema_key_map(G__22118){var validate__12721__auto__ = ufv___22119.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___22124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22118], null);var temp__4126__auto___22125 = input_checker22116_22122.call(null,args__12722__auto___22124);if(cljs.core.truth_(temp__4126__auto___22125))
{var error__12723__auto___22126 = temp__4126__auto___22125;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12723__auto___22126)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22115_22121,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22124,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22126], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__22118;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___22127 = output_checker22117_22123.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22127))
{var error__12723__auto___22128 = temp__4126__auto___22127;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__12723__auto___22128)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22114_22120,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22128], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22119,output_schema22114_22120,input_schema22115_22121,input_checker22116_22122,output_checker22117_22123))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema22114_22120,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22115_22121], null)));
var ufv___22134 = schema.utils.use_fn_validation;var output_schema22129_22135 = schema.core.Any;var input_schema22130_22136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker22131_22137 = schema.core.checker.call(null,input_schema22130_22136);var output_checker22132_22138 = schema.core.checker.call(null,output_schema22129_22135);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___22134,output_schema22129_22135,input_schema22130_22136,input_checker22131_22137,output_checker22132_22138){
return (function split_schema_keys(G__22133){var validate__12721__auto__ = ufv___22134.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___22139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22133], null);var temp__4126__auto___22140 = input_checker22131_22137.call(null,args__12722__auto___22139);if(cljs.core.truth_(temp__4126__auto___22140))
{var error__12723__auto___22141 = temp__4126__auto___22140;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12723__auto___22141)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22130_22136,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22139,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22141], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__22133;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___22142 = output_checker22132_22138.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22142))
{var error__12723__auto___22143 = temp__4126__auto___22142;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__12723__auto___22143)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22129_22135,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22143], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22134,output_schema22129_22135,input_schema22130_22136,input_checker22131_22137,output_checker22132_22138))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema22129_22135,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22130_22136], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__22147){var vec__22148 = p__22147;var k = cljs.core.nth.call(null,vec__22148,(0),null);var v = cljs.core.nth.call(null,vec__22148,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__22149 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__22149,(0),null);var ov = cljs.core.nth.call(null,vec__22149,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__22150){
var key_project = cljs.core.first(arglist__22150);
arglist__22150 = cljs.core.next(arglist__22150);
var key_combine = cljs.core.first(arglist__22150);
arglist__22150 = cljs.core.next(arglist__22150);
var val_combine = cljs.core.first(arglist__22150);
var maps = cljs.core.rest(arglist__22150);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___22158 = schema.utils.use_fn_validation;var output_schema22152_22159 = plumbing.fnk.schema.InputSchema;var input_schema22153_22160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker22154_22161 = schema.core.checker.call(null,input_schema22153_22160);var output_checker22155_22162 = schema.core.checker.call(null,output_schema22152_22159);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162){
return (function union_input_schemata(G__22156,G__22157){var validate__12721__auto__ = ufv___22158.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___22163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22156,G__22157], null);var temp__4126__auto___22164 = input_checker22154_22161.call(null,args__12722__auto___22163);if(cljs.core.truth_(temp__4126__auto___22164))
{var error__12723__auto___22165 = temp__4126__auto___22164;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12723__auto___22165)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22153_22160,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22163,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22165], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var i1 = G__22156;var i2 = G__22157;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__12721__auto__,ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162){
return (function (p1__22151_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__22151_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__22151_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__12721__auto__,ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162))
,((function (validate__12721__auto__,ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162){
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
});})(validate__12721__auto__,ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162))
,((function (validate__12721__auto__,ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__12721__auto__,ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___22166 = output_checker22155_22162.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22166))
{var error__12723__auto___22167 = temp__4126__auto___22166;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__12723__auto___22167)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22152_22159,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22167], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22158,output_schema22152_22159,input_schema22153_22160,input_checker22154_22161,output_checker22155_22162))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema22152_22159,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22153_22160], null)));
var ufv___22173 = schema.utils.use_fn_validation;var output_schema22168_22174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema22169_22175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker22170_22176 = schema.core.checker.call(null,input_schema22169_22175);var output_checker22171_22177 = schema.core.checker.call(null,output_schema22168_22174);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___22173,output_schema22168_22174,input_schema22169_22175,input_checker22170_22176,output_checker22171_22177){
return (function required_toplevel_keys(G__22172){var validate__12721__auto__ = ufv___22173.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___22178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22172], null);var temp__4126__auto___22179 = input_checker22170_22176.call(null,args__12722__auto___22178);if(cljs.core.truth_(temp__4126__auto___22179))
{var error__12723__auto___22180 = temp__4126__auto___22179;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12723__auto___22180)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22169_22175,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22178,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22180], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var input_schema = G__22172;while(true){
return cljs.core.keep.call(null,((function (validate__12721__auto__,ufv___22173,output_schema22168_22174,input_schema22169_22175,input_checker22170_22176,output_checker22171_22177){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__12721__auto__,ufv___22173,output_schema22168_22174,input_schema22169_22175,input_checker22170_22176,output_checker22171_22177))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___22181 = output_checker22171_22177.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22181))
{var error__12723__auto___22182 = temp__4126__auto___22181;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__12723__auto___22182)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22168_22174,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22182], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22173,output_schema22168_22174,input_schema22169_22175,input_checker22170_22176,output_checker22171_22177))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema22168_22174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22169_22175], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__22191(s__22192){return (new cljs.core.LazySeq(null,(function (){var s__22192__$1 = s__22192;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22192__$1);if(temp__4126__auto__)
{var s__22192__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22192__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22192__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22194 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22193 = (0);while(true){
if((i__22193 < size__4282__auto__))
{var vec__22197 = cljs.core._nth.call(null,c__4281__auto__,i__22193);var k = cljs.core.nth.call(null,vec__22197,(0),null);var v = cljs.core.nth.call(null,vec__22197,(1),null);cljs.core.chunk_append.call(null,b__22194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__22199 = (i__22193 + (1));
i__22193 = G__22199;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22194),iter__22191.call(null,cljs.core.chunk_rest.call(null,s__22192__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22194),null);
}
} else
{var vec__22198 = cljs.core.first.call(null,s__22192__$2);var k = cljs.core.nth.call(null,vec__22198,(0),null);var v = cljs.core.nth.call(null,vec__22198,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__22191.call(null,cljs.core.rest.call(null,s__22192__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__22208(s__22209){return (new cljs.core.LazySeq(null,(function (){var s__22209__$1 = s__22209;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22209__$1);if(temp__4126__auto__)
{var s__22209__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22209__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22209__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22211 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22210 = (0);while(true){
if((i__22210 < size__4282__auto__))
{var vec__22214 = cljs.core._nth.call(null,c__4281__auto__,i__22210);var k = cljs.core.nth.call(null,vec__22214,(0),null);var v = cljs.core.nth.call(null,vec__22214,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__22211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__22216 = (i__22210 + (1));
i__22210 = G__22216;
continue;
}
} else
{{
var G__22217 = (i__22210 + (1));
i__22210 = G__22217;
continue;
}
}
} else
{{
var G__22218 = (i__22210 + (1));
i__22210 = G__22218;
continue;
}
}
} else
{{
var G__22219 = (i__22210 + (1));
i__22210 = G__22219;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22211),iter__22208.call(null,cljs.core.chunk_rest.call(null,s__22209__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22211),null);
}
} else
{var vec__22215 = cljs.core.first.call(null,s__22209__$2);var k = cljs.core.nth.call(null,vec__22215,(0),null);var v = cljs.core.nth.call(null,vec__22215,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__22208.call(null,cljs.core.rest.call(null,s__22209__$2)));
} else
{{
var G__22220 = cljs.core.rest.call(null,s__22209__$2);
s__22209__$1 = G__22220;
continue;
}
}
} else
{{
var G__22221 = cljs.core.rest.call(null,s__22209__$2);
s__22209__$1 = G__22221;
continue;
}
}
} else
{{
var G__22222 = cljs.core.rest.call(null,s__22209__$2);
s__22209__$1 = G__22222;
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
var ufv___22245 = schema.utils.use_fn_validation;var output_schema22223_22246 = schema.core.Any;var input_schema22224_22247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22225_22248 = schema.core.checker.call(null,input_schema22224_22247);var output_checker22226_22249 = schema.core.checker.call(null,output_schema22223_22246);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___22245,output_schema22223_22246,input_schema22224_22247,input_checker22225_22248,output_checker22226_22249){
return (function compose_schemata(G__22227,G__22228){var validate__12721__auto__ = true;if(validate__12721__auto__)
{var args__12722__auto___22250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22227,G__22228], null);var temp__4126__auto___22251 = input_checker22225_22248.call(null,args__12722__auto___22250);if(cljs.core.truth_(temp__4126__auto___22251))
{var error__12723__auto___22252 = temp__4126__auto___22251;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12723__auto___22252)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22224_22247,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22250,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22252], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__22239 = G__22227;var vec__22241 = G__22239;var i2 = cljs.core.nth.call(null,vec__22241,(0),null);var o2 = cljs.core.nth.call(null,vec__22241,(1),null);var G__22240 = G__22228;var vec__22242 = G__22240;var i1 = cljs.core.nth.call(null,vec__22242,(0),null);var o1 = cljs.core.nth.call(null,vec__22242,(1),null);var G__22239__$1 = G__22239;var G__22240__$1 = G__22240;while(true){
var vec__22243 = G__22239__$1;var i2__$1 = cljs.core.nth.call(null,vec__22243,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22243,(1),null);var vec__22244 = G__22240__$1;var i1__$1 = cljs.core.nth.call(null,vec__22244,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22244,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__12721__auto__)
{var temp__4126__auto___22253 = output_checker22226_22249.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22253))
{var error__12723__auto___22254 = temp__4126__auto___22253;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__12723__auto___22254)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22223_22246,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22254], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22245,output_schema22223_22246,input_schema22224_22247,input_checker22225_22248,output_checker22226_22249))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema22223_22246,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22224_22247], null)));
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
var ufv___22333 = schema.utils.use_fn_validation;var output_schema22255_22334 = schema.core.Any;var input_schema22256_22335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker22257_22336 = schema.core.checker.call(null,input_schema22256_22335);var output_checker22258_22337 = schema.core.checker.call(null,output_schema22255_22334);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337){
return (function split_schema(G__22259,G__22260){var validate__12721__auto__ = ufv___22333.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___22338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22259,G__22260], null);var temp__4126__auto___22339 = input_checker22257_22336.call(null,args__12722__auto___22338);if(cljs.core.truth_(temp__4126__auto___22339))
{var error__12723__auto___22340 = temp__4126__auto___22339;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12723__auto___22340)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22256_22335,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22338,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22340], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var s = G__22259;var ks = G__22260;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337){
return (function iter__22297(s__22298){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337){
return (function (){var s__22298__$1 = s__22298;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22298__$1);if(temp__4126__auto__)
{var s__22298__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22298__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22298__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22300 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22299 = (0);while(true){
if((i__22299 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__22299);cljs.core.chunk_append.call(null,b__22300,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__22299,in_QMARK_,c__4281__auto__,size__4282__auto__,b__22300,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337){
return (function iter__22317(s__22318){return (new cljs.core.LazySeq(null,((function (i__22299,in_QMARK_,c__4281__auto__,size__4282__auto__,b__22300,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337){
return (function (){var s__22318__$1 = s__22318;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22318__$1);if(temp__4126__auto____$1)
{var s__22318__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22318__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__22318__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__22320 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__22319 = (0);while(true){
if((i__22319 < size__4282__auto____$1))
{var vec__22323 = cljs.core._nth.call(null,c__4281__auto____$1,i__22319);var k = cljs.core.nth.call(null,vec__22323,(0),null);var v = cljs.core.nth.call(null,vec__22323,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22320,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22341 = (i__22319 + (1));
i__22319 = G__22341;
continue;
}
} else
{{
var G__22342 = (i__22319 + (1));
i__22319 = G__22342;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22320),iter__22317.call(null,cljs.core.chunk_rest.call(null,s__22318__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22320),null);
}
} else
{var vec__22324 = cljs.core.first.call(null,s__22318__$2);var k = cljs.core.nth.call(null,vec__22324,(0),null);var v = cljs.core.nth.call(null,vec__22324,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22317.call(null,cljs.core.rest.call(null,s__22318__$2)));
} else
{{
var G__22343 = cljs.core.rest.call(null,s__22318__$2);
s__22318__$1 = G__22343;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__22299,in_QMARK_,c__4281__auto__,size__4282__auto__,b__22300,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337))
,null,null));
});})(i__22299,in_QMARK_,c__4281__auto__,size__4282__auto__,b__22300,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__22344 = (i__22299 + (1));
i__22299 = G__22344;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22300),iter__22297.call(null,cljs.core.chunk_rest.call(null,s__22298__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22300),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__22298__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337){
return (function iter__22325(s__22326){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337){
return (function (){var s__22326__$1 = s__22326;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__22326__$1);if(temp__4126__auto____$1)
{var s__22326__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__22326__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22326__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22328 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22327 = (0);while(true){
if((i__22327 < size__4282__auto__))
{var vec__22331 = cljs.core._nth.call(null,c__4281__auto__,i__22327);var k = cljs.core.nth.call(null,vec__22331,(0),null);var v = cljs.core.nth.call(null,vec__22331,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__22328,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22345 = (i__22327 + (1));
i__22327 = G__22345;
continue;
}
} else
{{
var G__22346 = (i__22327 + (1));
i__22327 = G__22346;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22328),iter__22325.call(null,cljs.core.chunk_rest.call(null,s__22326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22328),null);
}
} else
{var vec__22332 = cljs.core.first.call(null,s__22326__$2);var k = cljs.core.nth.call(null,vec__22332,(0),null);var v = cljs.core.nth.call(null,vec__22332,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22325.call(null,cljs.core.rest.call(null,s__22326__$2)));
} else
{{
var G__22347 = cljs.core.rest.call(null,s__22326__$2);
s__22326__$1 = G__22347;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337))
,null,null));
});})(in_QMARK_,s__22298__$2,temp__4126__auto__,ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337))
;return iter__4283__auto__.call(null,s);
})()),iter__22297.call(null,cljs.core.rest.call(null,s__22298__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337))
,null,null));
});})(ks__$1,validate__12721__auto__,ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___22348 = output_checker22258_22337.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22348))
{var error__12723__auto___22349 = temp__4126__auto___22348;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__12723__auto___22349)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22255_22334,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22349], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22333,output_schema22255_22334,input_schema22256_22335,input_checker22257_22336,output_checker22258_22337))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema22255_22334,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22256_22335], null)));
var ufv___22380 = schema.utils.use_fn_validation;var output_schema22350_22381 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22351_22382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22352_22383 = schema.core.checker.call(null,input_schema22351_22382);var output_checker22353_22384 = schema.core.checker.call(null,output_schema22350_22381);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22380,output_schema22350_22381,input_schema22351_22382,input_checker22352_22383,output_checker22353_22384){
return (function sequence_schemata(G__22354,G__22355){var validate__12721__auto__ = ufv___22380.get_cell();if(cljs.core.truth_(validate__12721__auto__))
{var args__12722__auto___22385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22354,G__22355], null);var temp__4126__auto___22386 = input_checker22352_22383.call(null,args__12722__auto___22385);if(cljs.core.truth_(temp__4126__auto___22386))
{var error__12723__auto___22387 = temp__4126__auto___22386;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12723__auto___22387)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22351_22382,new cljs.core.Keyword(null,"value","value",305978217),args__12722__auto___22385,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22387], null));
} else
{}
} else
{}
var o__12724__auto__ = (function (){var G__22371 = G__22354;var vec__22373 = G__22371;var i1 = cljs.core.nth.call(null,vec__22373,(0),null);var o1 = cljs.core.nth.call(null,vec__22373,(1),null);var G__22372 = G__22355;var vec__22374 = G__22372;var k = cljs.core.nth.call(null,vec__22374,(0),null);var vec__22375 = cljs.core.nth.call(null,vec__22374,(1),null);var i2 = cljs.core.nth.call(null,vec__22375,(0),null);var o2 = cljs.core.nth.call(null,vec__22375,(1),null);var G__22371__$1 = G__22371;var G__22372__$1 = G__22372;while(true){
var vec__22376 = G__22371__$1;var i1__$1 = cljs.core.nth.call(null,vec__22376,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22376,(1),null);var vec__22377 = G__22372__$1;var k__$1 = cljs.core.nth.call(null,vec__22377,(0),null);var vec__22378 = cljs.core.nth.call(null,vec__22377,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22378,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22378,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__22379 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22379,(0),null);var unused = cljs.core.nth.call(null,vec__22379,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__12721__auto__))
{var temp__4126__auto___22388 = output_checker22353_22384.call(null,o__12724__auto__);if(cljs.core.truth_(temp__4126__auto___22388))
{var error__12723__auto___22389 = temp__4126__auto___22388;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__12723__auto___22389)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22350_22381,new cljs.core.Keyword(null,"value","value",305978217),o__12724__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12723__auto___22389], null));
} else
{}
} else
{}
return o__12724__auto__;
});})(ufv___22380,output_schema22350_22381,input_schema22351_22382,input_checker22352_22383,output_checker22353_22384))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22350_22381,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22351_22382], null)));
