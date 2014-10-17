// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10547__10548__auto__){var G__37878 = p1__10547__10548__auto__;if(G__37878)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__37878.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__37878.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__37878);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__37878);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__37879_SHARP_){return (cljs.core.val.call(null,p1__37879_SHARP_) > (1));
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
var vec__37881 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__37881,(0),null);var v = cljs.core.nth.call(null,vec__37881,(1),null);var p = vec__37881;if(cljs.core.truth_(p))
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
var ufv___37887 = schema.utils.use_fn_validation;var output_schema37882_37888 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema37883_37889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker37884_37890 = schema.core.checker.call(null,input_schema37883_37889);var output_checker37885_37891 = schema.core.checker.call(null,output_schema37882_37888);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___37887,output_schema37882_37888,input_schema37883_37889,input_checker37884_37890,output_checker37885_37891){
return (function unwrap_schema_form_key(G__37886){var validate__10517__auto__ = ufv___37887.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37886], null);var temp__4126__auto___37893 = input_checker37884_37890.call(null,args__10518__auto___37892);if(cljs.core.truth_(temp__4126__auto___37893))
{var error__10519__auto___37894 = temp__4126__auto___37893;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___37894)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37883_37889,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37892,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37894], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__37886;while(true){
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
{var temp__4126__auto___37895 = output_checker37885_37891.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37895))
{var error__10519__auto___37896 = temp__4126__auto___37895;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___37896)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37882_37888,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37896], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37887,output_schema37882_37888,input_schema37883_37889,input_checker37884_37890,output_checker37885_37891))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema37882_37888,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37883_37889], null)));
var ufv___37902 = schema.utils.use_fn_validation;var output_schema37897_37903 = schema.core.Any;var input_schema37898_37904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker37899_37905 = schema.core.checker.call(null,input_schema37898_37904);var output_checker37900_37906 = schema.core.checker.call(null,output_schema37897_37903);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___37902,output_schema37897_37903,input_schema37898_37904,input_checker37899_37905,output_checker37900_37906){
return (function explicit_schema_key_map(G__37901){var validate__10517__auto__ = ufv___37902.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37901], null);var temp__4126__auto___37908 = input_checker37899_37905.call(null,args__10518__auto___37907);if(cljs.core.truth_(temp__4126__auto___37908))
{var error__10519__auto___37909 = temp__4126__auto___37908;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___37909)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37898_37904,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37907,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37909], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__37901;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37910 = output_checker37900_37906.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37910))
{var error__10519__auto___37911 = temp__4126__auto___37910;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___37911)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37897_37903,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37911], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37902,output_schema37897_37903,input_schema37898_37904,input_checker37899_37905,output_checker37900_37906))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema37897_37903,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37898_37904], null)));
var ufv___37917 = schema.utils.use_fn_validation;var output_schema37912_37918 = schema.core.Any;var input_schema37913_37919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker37914_37920 = schema.core.checker.call(null,input_schema37913_37919);var output_checker37915_37921 = schema.core.checker.call(null,output_schema37912_37918);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___37917,output_schema37912_37918,input_schema37913_37919,input_checker37914_37920,output_checker37915_37921){
return (function split_schema_keys(G__37916){var validate__10517__auto__ = ufv___37917.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37916], null);var temp__4126__auto___37923 = input_checker37914_37920.call(null,args__10518__auto___37922);if(cljs.core.truth_(temp__4126__auto___37923))
{var error__10519__auto___37924 = temp__4126__auto___37923;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___37924)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37913_37919,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37922,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37924], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__37916;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37925 = output_checker37915_37921.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37925))
{var error__10519__auto___37926 = temp__4126__auto___37925;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___37926)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37912_37918,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37926], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37917,output_schema37912_37918,input_schema37913_37919,input_checker37914_37920,output_checker37915_37921))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema37912_37918,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37913_37919], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__37930){var vec__37931 = p__37930;var k = cljs.core.nth.call(null,vec__37931,(0),null);var v = cljs.core.nth.call(null,vec__37931,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__37932 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__37932,(0),null);var ov = cljs.core.nth.call(null,vec__37932,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__37933){
var key_project = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var key_combine = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var val_combine = cljs.core.first(arglist__37933);
var maps = cljs.core.rest(arglist__37933);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___37941 = schema.utils.use_fn_validation;var output_schema37935_37942 = plumbing.fnk.schema.InputSchema;var input_schema37936_37943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker37937_37944 = schema.core.checker.call(null,input_schema37936_37943);var output_checker37938_37945 = schema.core.checker.call(null,output_schema37935_37942);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945){
return (function union_input_schemata(G__37939,G__37940){var validate__10517__auto__ = ufv___37941.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37939,G__37940], null);var temp__4126__auto___37947 = input_checker37937_37944.call(null,args__10518__auto___37946);if(cljs.core.truth_(temp__4126__auto___37947))
{var error__10519__auto___37948 = temp__4126__auto___37947;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___37948)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37936_37943,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37946,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37948], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__37939;var i2 = G__37940;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10517__auto__,ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945){
return (function (p1__37934_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__37934_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__37934_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10517__auto__,ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945))
,((function (validate__10517__auto__,ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945){
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
});})(validate__10517__auto__,ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945))
,((function (validate__10517__auto__,ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10517__auto__,ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37949 = output_checker37938_37945.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37949))
{var error__10519__auto___37950 = temp__4126__auto___37949;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___37950)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37935_37942,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37950], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37941,output_schema37935_37942,input_schema37936_37943,input_checker37937_37944,output_checker37938_37945))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema37935_37942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37936_37943], null)));
var ufv___37956 = schema.utils.use_fn_validation;var output_schema37951_37957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema37952_37958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker37953_37959 = schema.core.checker.call(null,input_schema37952_37958);var output_checker37954_37960 = schema.core.checker.call(null,output_schema37951_37957);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___37956,output_schema37951_37957,input_schema37952_37958,input_checker37953_37959,output_checker37954_37960){
return (function required_toplevel_keys(G__37955){var validate__10517__auto__ = ufv___37956.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37955], null);var temp__4126__auto___37962 = input_checker37953_37959.call(null,args__10518__auto___37961);if(cljs.core.truth_(temp__4126__auto___37962))
{var error__10519__auto___37963 = temp__4126__auto___37962;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___37963)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37952_37958,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37961,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37963], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__37955;while(true){
return cljs.core.keep.call(null,((function (validate__10517__auto__,ufv___37956,output_schema37951_37957,input_schema37952_37958,input_checker37953_37959,output_checker37954_37960){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___37956,output_schema37951_37957,input_schema37952_37958,input_checker37953_37959,output_checker37954_37960))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37964 = output_checker37954_37960.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37964))
{var error__10519__auto___37965 = temp__4126__auto___37964;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___37965)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37951_37957,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37965], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37956,output_schema37951_37957,input_schema37952_37958,input_checker37953_37959,output_checker37954_37960))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema37951_37957,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37952_37958], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__37974(s__37975){return (new cljs.core.LazySeq(null,(function (){var s__37975__$1 = s__37975;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37975__$1);if(temp__4126__auto__)
{var s__37975__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37975__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37975__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37977 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37976 = (0);while(true){
if((i__37976 < size__4282__auto__))
{var vec__37980 = cljs.core._nth.call(null,c__4281__auto__,i__37976);var k = cljs.core.nth.call(null,vec__37980,(0),null);var v = cljs.core.nth.call(null,vec__37980,(1),null);cljs.core.chunk_append.call(null,b__37977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__37982 = (i__37976 + (1));
i__37976 = G__37982;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37977),iter__37974.call(null,cljs.core.chunk_rest.call(null,s__37975__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37977),null);
}
} else
{var vec__37981 = cljs.core.first.call(null,s__37975__$2);var k = cljs.core.nth.call(null,vec__37981,(0),null);var v = cljs.core.nth.call(null,vec__37981,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__37974.call(null,cljs.core.rest.call(null,s__37975__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__37991(s__37992){return (new cljs.core.LazySeq(null,(function (){var s__37992__$1 = s__37992;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37992__$1);if(temp__4126__auto__)
{var s__37992__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37992__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37992__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37994 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37993 = (0);while(true){
if((i__37993 < size__4282__auto__))
{var vec__37997 = cljs.core._nth.call(null,c__4281__auto__,i__37993);var k = cljs.core.nth.call(null,vec__37997,(0),null);var v = cljs.core.nth.call(null,vec__37997,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__37994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__37999 = (i__37993 + (1));
i__37993 = G__37999;
continue;
}
} else
{{
var G__38000 = (i__37993 + (1));
i__37993 = G__38000;
continue;
}
}
} else
{{
var G__38001 = (i__37993 + (1));
i__37993 = G__38001;
continue;
}
}
} else
{{
var G__38002 = (i__37993 + (1));
i__37993 = G__38002;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37994),iter__37991.call(null,cljs.core.chunk_rest.call(null,s__37992__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37994),null);
}
} else
{var vec__37998 = cljs.core.first.call(null,s__37992__$2);var k = cljs.core.nth.call(null,vec__37998,(0),null);var v = cljs.core.nth.call(null,vec__37998,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__37991.call(null,cljs.core.rest.call(null,s__37992__$2)));
} else
{{
var G__38003 = cljs.core.rest.call(null,s__37992__$2);
s__37992__$1 = G__38003;
continue;
}
}
} else
{{
var G__38004 = cljs.core.rest.call(null,s__37992__$2);
s__37992__$1 = G__38004;
continue;
}
}
} else
{{
var G__38005 = cljs.core.rest.call(null,s__37992__$2);
s__37992__$1 = G__38005;
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
var ufv___38028 = schema.utils.use_fn_validation;var output_schema38006_38029 = schema.core.Any;var input_schema38007_38030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker38008_38031 = schema.core.checker.call(null,input_schema38007_38030);var output_checker38009_38032 = schema.core.checker.call(null,output_schema38006_38029);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___38028,output_schema38006_38029,input_schema38007_38030,input_checker38008_38031,output_checker38009_38032){
return (function compose_schemata(G__38010,G__38011){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___38033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38010,G__38011], null);var temp__4126__auto___38034 = input_checker38008_38031.call(null,args__10518__auto___38033);if(cljs.core.truth_(temp__4126__auto___38034))
{var error__10519__auto___38035 = temp__4126__auto___38034;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___38035)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38007_38030,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___38033,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38035], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__38022 = G__38010;var vec__38024 = G__38022;var i2 = cljs.core.nth.call(null,vec__38024,(0),null);var o2 = cljs.core.nth.call(null,vec__38024,(1),null);var G__38023 = G__38011;var vec__38025 = G__38023;var i1 = cljs.core.nth.call(null,vec__38025,(0),null);var o1 = cljs.core.nth.call(null,vec__38025,(1),null);var G__38022__$1 = G__38022;var G__38023__$1 = G__38023;while(true){
var vec__38026 = G__38022__$1;var i2__$1 = cljs.core.nth.call(null,vec__38026,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__38026,(1),null);var vec__38027 = G__38023__$1;var i1__$1 = cljs.core.nth.call(null,vec__38027,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__38027,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___38036 = output_checker38009_38032.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___38036))
{var error__10519__auto___38037 = temp__4126__auto___38036;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___38037)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38006_38029,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38037], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___38028,output_schema38006_38029,input_schema38007_38030,input_checker38008_38031,output_checker38009_38032))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema38006_38029,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38007_38030], null)));
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
var ufv___38116 = schema.utils.use_fn_validation;var output_schema38038_38117 = schema.core.Any;var input_schema38039_38118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker38040_38119 = schema.core.checker.call(null,input_schema38039_38118);var output_checker38041_38120 = schema.core.checker.call(null,output_schema38038_38117);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120){
return (function split_schema(G__38042,G__38043){var validate__10517__auto__ = ufv___38116.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___38121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38042,G__38043], null);var temp__4126__auto___38122 = input_checker38040_38119.call(null,args__10518__auto___38121);if(cljs.core.truth_(temp__4126__auto___38122))
{var error__10519__auto___38123 = temp__4126__auto___38122;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___38123)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38039_38118,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___38121,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38123], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__38042;var ks = G__38043;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120){
return (function iter__38080(s__38081){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120){
return (function (){var s__38081__$1 = s__38081;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38081__$1);if(temp__4126__auto__)
{var s__38081__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38081__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38081__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38083 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38082 = (0);while(true){
if((i__38082 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__38082);cljs.core.chunk_append.call(null,b__38083,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__38082,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38083,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120){
return (function iter__38100(s__38101){return (new cljs.core.LazySeq(null,((function (i__38082,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38083,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120){
return (function (){var s__38101__$1 = s__38101;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__38101__$1);if(temp__4126__auto____$1)
{var s__38101__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__38101__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__38101__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__38103 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__38102 = (0);while(true){
if((i__38102 < size__4282__auto____$1))
{var vec__38106 = cljs.core._nth.call(null,c__4281__auto____$1,i__38102);var k = cljs.core.nth.call(null,vec__38106,(0),null);var v = cljs.core.nth.call(null,vec__38106,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__38103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38124 = (i__38102 + (1));
i__38102 = G__38124;
continue;
}
} else
{{
var G__38125 = (i__38102 + (1));
i__38102 = G__38125;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38103),iter__38100.call(null,cljs.core.chunk_rest.call(null,s__38101__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38103),null);
}
} else
{var vec__38107 = cljs.core.first.call(null,s__38101__$2);var k = cljs.core.nth.call(null,vec__38107,(0),null);var v = cljs.core.nth.call(null,vec__38107,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38100.call(null,cljs.core.rest.call(null,s__38101__$2)));
} else
{{
var G__38126 = cljs.core.rest.call(null,s__38101__$2);
s__38101__$1 = G__38126;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__38082,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38083,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120))
,null,null));
});})(i__38082,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38083,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__38127 = (i__38082 + (1));
i__38082 = G__38127;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38083),iter__38080.call(null,cljs.core.chunk_rest.call(null,s__38081__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38083),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__38081__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120){
return (function iter__38108(s__38109){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120){
return (function (){var s__38109__$1 = s__38109;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__38109__$1);if(temp__4126__auto____$1)
{var s__38109__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__38109__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38109__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38111 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38110 = (0);while(true){
if((i__38110 < size__4282__auto__))
{var vec__38114 = cljs.core._nth.call(null,c__4281__auto__,i__38110);var k = cljs.core.nth.call(null,vec__38114,(0),null);var v = cljs.core.nth.call(null,vec__38114,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__38111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38128 = (i__38110 + (1));
i__38110 = G__38128;
continue;
}
} else
{{
var G__38129 = (i__38110 + (1));
i__38110 = G__38129;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),iter__38108.call(null,cljs.core.chunk_rest.call(null,s__38109__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),null);
}
} else
{var vec__38115 = cljs.core.first.call(null,s__38109__$2);var k = cljs.core.nth.call(null,vec__38115,(0),null);var v = cljs.core.nth.call(null,vec__38115,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38108.call(null,cljs.core.rest.call(null,s__38109__$2)));
} else
{{
var G__38130 = cljs.core.rest.call(null,s__38109__$2);
s__38109__$1 = G__38130;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120))
,null,null));
});})(in_QMARK_,s__38081__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120))
;return iter__4283__auto__.call(null,s);
})()),iter__38080.call(null,cljs.core.rest.call(null,s__38081__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___38131 = output_checker38041_38120.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___38131))
{var error__10519__auto___38132 = temp__4126__auto___38131;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___38132)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38038_38117,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38132], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___38116,output_schema38038_38117,input_schema38039_38118,input_checker38040_38119,output_checker38041_38120))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema38038_38117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38039_38118], null)));
var ufv___38163 = schema.utils.use_fn_validation;var output_schema38133_38164 = plumbing.fnk.schema.GraphIOSchemata;var input_schema38134_38165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker38135_38166 = schema.core.checker.call(null,input_schema38134_38165);var output_checker38136_38167 = schema.core.checker.call(null,output_schema38133_38164);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___38163,output_schema38133_38164,input_schema38134_38165,input_checker38135_38166,output_checker38136_38167){
return (function sequence_schemata(G__38137,G__38138){var validate__10517__auto__ = ufv___38163.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___38168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38137,G__38138], null);var temp__4126__auto___38169 = input_checker38135_38166.call(null,args__10518__auto___38168);if(cljs.core.truth_(temp__4126__auto___38169))
{var error__10519__auto___38170 = temp__4126__auto___38169;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___38170)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38134_38165,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___38168,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38170], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__38154 = G__38137;var vec__38156 = G__38154;var i1 = cljs.core.nth.call(null,vec__38156,(0),null);var o1 = cljs.core.nth.call(null,vec__38156,(1),null);var G__38155 = G__38138;var vec__38157 = G__38155;var k = cljs.core.nth.call(null,vec__38157,(0),null);var vec__38158 = cljs.core.nth.call(null,vec__38157,(1),null);var i2 = cljs.core.nth.call(null,vec__38158,(0),null);var o2 = cljs.core.nth.call(null,vec__38158,(1),null);var G__38154__$1 = G__38154;var G__38155__$1 = G__38155;while(true){
var vec__38159 = G__38154__$1;var i1__$1 = cljs.core.nth.call(null,vec__38159,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__38159,(1),null);var vec__38160 = G__38155__$1;var k__$1 = cljs.core.nth.call(null,vec__38160,(0),null);var vec__38161 = cljs.core.nth.call(null,vec__38160,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__38161,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__38161,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__38162 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__38162,(0),null);var unused = cljs.core.nth.call(null,vec__38162,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___38171 = output_checker38136_38167.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___38171))
{var error__10519__auto___38172 = temp__4126__auto___38171;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___38172)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38133_38164,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38172], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___38163,output_schema38133_38164,input_schema38134_38165,input_checker38135_38166,output_checker38136_38167))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema38133_38164,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38134_38165], null)));
