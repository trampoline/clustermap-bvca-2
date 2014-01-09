// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15616__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15615 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15615,0,null);var body = cljs.core.nthnext.call(null,vec__15615,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15616 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15616__delegate.call(this,args);};
G__15616.cljs$lang$maxFixedArity = 0;
G__15616.cljs$lang$applyTo = (function (arglist__15617){
var args = cljs.core.seq(arglist__15617);
return G__15616__delegate(args);
});
G__15616.cljs$core$IFn$_invoke$arity$variadic = G__15616__delegate;
return G__15616;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15622(s__15623){return (new cljs.core.LazySeq(null,(function (){var s__15623__$1 = s__15623;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15623__$1);if(temp__4092__auto__)
{var s__15623__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15623__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15623__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15625 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15624 = 0;while(true){
if((i__15624 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15624);cljs.core.chunk_append.call(null,b__15625,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15626 = (i__15624 + 1);
i__15624 = G__15626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15625),iter__15622.call(null,cljs.core.chunk_rest.call(null,s__15623__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15625),null);
}
} else
{var args = cljs.core.first.call(null,s__15623__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15622.call(null,cljs.core.rest.call(null,s__15623__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15631(s__15632){return (new cljs.core.LazySeq(null,(function (){var s__15632__$1 = s__15632;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15632__$1);if(temp__4092__auto__)
{var s__15632__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15632__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15632__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15634 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15633 = 0;while(true){
if((i__15633 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15633);cljs.core.chunk_append.call(null,b__15634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15635 = (i__15633 + 1);
i__15633 = G__15635;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15634),iter__15631.call(null,cljs.core.chunk_rest.call(null,s__15632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15634),null);
}
} else
{var script = cljs.core.first.call(null,s__15632__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15631.call(null,cljs.core.rest.call(null,s__15632__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__15636){
var scripts = cljs.core.seq(arglist__15636);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15641(s__15642){return (new cljs.core.LazySeq(null,(function (){var s__15642__$1 = s__15642;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15642__$1);if(temp__4092__auto__)
{var s__15642__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15642__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15642__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15644 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15643 = 0;while(true){
if((i__15643 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15643);cljs.core.chunk_append.call(null,b__15644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15645 = (i__15643 + 1);
i__15643 = G__15645;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15644),iter__15641.call(null,cljs.core.chunk_rest.call(null,s__15642__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15644),null);
}
} else
{var style = cljs.core.first.call(null,s__15642__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15641.call(null,cljs.core.rest.call(null,s__15642__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__15646){
var styles = cljs.core.seq(arglist__15646);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15647 = (function() { 
var link_to15647__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15647 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15647__delegate.call(this,url,content);};
link_to15647.cljs$lang$maxFixedArity = 1;
link_to15647.cljs$lang$applyTo = (function (arglist__15648){
var url = cljs.core.first(arglist__15648);
var content = cljs.core.rest(arglist__15648);
return link_to15647__delegate(url,content);
});
link_to15647.cljs$core$IFn$_invoke$arity$variadic = link_to15647__delegate;
return link_to15647;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15647);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15649 = (function() { 
var mail_to15649__delegate = function (e_mail,p__15650){var vec__15652 = p__15650;var content = cljs.core.nth.call(null,vec__15652,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15649 = function (e_mail,var_args){
var p__15650 = null;if (arguments.length > 1) {
  p__15650 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15649__delegate.call(this,e_mail,p__15650);};
mail_to15649.cljs$lang$maxFixedArity = 1;
mail_to15649.cljs$lang$applyTo = (function (arglist__15653){
var e_mail = cljs.core.first(arglist__15653);
var p__15650 = cljs.core.rest(arglist__15653);
return mail_to15649__delegate(e_mail,p__15650);
});
mail_to15649.cljs$core$IFn$_invoke$arity$variadic = mail_to15649__delegate;
return mail_to15649;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15649);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15654 = (function unordered_list15654(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15659(s__15660){return (new cljs.core.LazySeq(null,(function (){var s__15660__$1 = s__15660;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15660__$1);if(temp__4092__auto__)
{var s__15660__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15660__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15660__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15662 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15661 = 0;while(true){
if((i__15661 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15661);cljs.core.chunk_append.call(null,b__15662,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15663 = (i__15661 + 1);
i__15661 = G__15663;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15662),iter__15659.call(null,cljs.core.chunk_rest.call(null,s__15660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15662),null);
}
} else
{var x = cljs.core.first.call(null,s__15660__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15659.call(null,cljs.core.rest.call(null,s__15660__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15654);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15664 = (function ordered_list15664(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15669(s__15670){return (new cljs.core.LazySeq(null,(function (){var s__15670__$1 = s__15670;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15670__$1);if(temp__4092__auto__)
{var s__15670__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15670__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15670__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15672 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15671 = 0;while(true){
if((i__15671 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15671);cljs.core.chunk_append.call(null,b__15672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15673 = (i__15671 + 1);
i__15671 = G__15673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15672),iter__15669.call(null,cljs.core.chunk_rest.call(null,s__15670__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15672),null);
}
} else
{var x = cljs.core.first.call(null,s__15670__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15669.call(null,cljs.core.rest.call(null,s__15670__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15664);
/**
* Create an image element.
*/
sablono.core.image15674 = (function() {
var image15674 = null;
var image15674__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15674__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15674 = function(src,alt){
switch(arguments.length){
case 1:
return image15674__1.call(this,src);
case 2:
return image15674__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15674.cljs$core$IFn$_invoke$arity$1 = image15674__1;
image15674.cljs$core$IFn$_invoke$arity$2 = image15674__2;
return image15674;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15674);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15675_SHARP_,p2__15676_SHARP_){return [cljs.core.str(p1__15675_SHARP_),cljs.core.str("["),cljs.core.str(p2__15676_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15677_SHARP_,p2__15678_SHARP_){return [cljs.core.str(p1__15677_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15678_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field15679 = (function() {
var hidden_field15679 = null;
var hidden_field15679__1 = (function (name){return hidden_field15679.call(null,name,null);
});
var hidden_field15679__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15679 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15679__1.call(this,name);
case 2:
return hidden_field15679__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15679.cljs$core$IFn$_invoke$arity$1 = hidden_field15679__1;
hidden_field15679.cljs$core$IFn$_invoke$arity$2 = hidden_field15679__2;
return hidden_field15679;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15679);
/**
* Creates a new text input field.
*/
sablono.core.text_field15680 = (function() {
var text_field15680 = null;
var text_field15680__1 = (function (name){return text_field15680.call(null,name,null);
});
var text_field15680__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15680 = function(name,value){
switch(arguments.length){
case 1:
return text_field15680__1.call(this,name);
case 2:
return text_field15680__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15680.cljs$core$IFn$_invoke$arity$1 = text_field15680__1;
text_field15680.cljs$core$IFn$_invoke$arity$2 = text_field15680__2;
return text_field15680;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15680);
/**
* Creates a new password field.
*/
sablono.core.password_field15681 = (function() {
var password_field15681 = null;
var password_field15681__1 = (function (name){return password_field15681.call(null,name,null);
});
var password_field15681__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15681 = function(name,value){
switch(arguments.length){
case 1:
return password_field15681__1.call(this,name);
case 2:
return password_field15681__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15681.cljs$core$IFn$_invoke$arity$1 = password_field15681__1;
password_field15681.cljs$core$IFn$_invoke$arity$2 = password_field15681__2;
return password_field15681;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15681);
/**
* Creates a new email input field.
*/
sablono.core.email_field15682 = (function() {
var email_field15682 = null;
var email_field15682__1 = (function (name){return email_field15682.call(null,name,null);
});
var email_field15682__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15682 = function(name,value){
switch(arguments.length){
case 1:
return email_field15682__1.call(this,name);
case 2:
return email_field15682__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15682.cljs$core$IFn$_invoke$arity$1 = email_field15682__1;
email_field15682.cljs$core$IFn$_invoke$arity$2 = email_field15682__2;
return email_field15682;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15682);
/**
* Creates a check box.
*/
sablono.core.check_box15683 = (function() {
var check_box15683 = null;
var check_box15683__1 = (function (name){return check_box15683.call(null,name,null);
});
var check_box15683__2 = (function (name,checked_QMARK_){return check_box15683.call(null,name,checked_QMARK_,"true");
});
var check_box15683__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15683 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15683__1.call(this,name);
case 2:
return check_box15683__2.call(this,name,checked_QMARK_);
case 3:
return check_box15683__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15683.cljs$core$IFn$_invoke$arity$1 = check_box15683__1;
check_box15683.cljs$core$IFn$_invoke$arity$2 = check_box15683__2;
check_box15683.cljs$core$IFn$_invoke$arity$3 = check_box15683__3;
return check_box15683;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15683);
/**
* Creates a radio button.
*/
sablono.core.radio_button15684 = (function() {
var radio_button15684 = null;
var radio_button15684__1 = (function (group){return radio_button15684.call(null,group,null);
});
var radio_button15684__2 = (function (group,checked_QMARK_){return radio_button15684.call(null,group,checked_QMARK_,"true");
});
var radio_button15684__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15684 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15684__1.call(this,group);
case 2:
return radio_button15684__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15684__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15684.cljs$core$IFn$_invoke$arity$1 = radio_button15684__1;
radio_button15684.cljs$core$IFn$_invoke$arity$2 = radio_button15684__2;
radio_button15684.cljs$core$IFn$_invoke$arity$3 = radio_button15684__3;
return radio_button15684;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15684);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15685 = (function() {
var select_options15685 = null;
var select_options15685__1 = (function (coll){return select_options15685.call(null,coll,null);
});
var select_options15685__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15694(s__15695){return (new cljs.core.LazySeq(null,(function (){var s__15695__$1 = s__15695;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15695__$1);if(temp__4092__auto__)
{var s__15695__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15695__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15695__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15697 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15696 = 0;while(true){
if((i__15696 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15696);cljs.core.chunk_append.call(null,b__15697,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15700 = x;var text = cljs.core.nth.call(null,vec__15700,0,null);var val = cljs.core.nth.call(null,vec__15700,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15685.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15702 = (i__15696 + 1);
i__15696 = G__15702;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15697),iter__15694.call(null,cljs.core.chunk_rest.call(null,s__15695__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15697),null);
}
} else
{var x = cljs.core.first.call(null,s__15695__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15701 = x;var text = cljs.core.nth.call(null,vec__15701,0,null);var val = cljs.core.nth.call(null,vec__15701,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15685.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15694.call(null,cljs.core.rest.call(null,s__15695__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15685 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15685__1.call(this,coll);
case 2:
return select_options15685__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15685.cljs$core$IFn$_invoke$arity$1 = select_options15685__1;
select_options15685.cljs$core$IFn$_invoke$arity$2 = select_options15685__2;
return select_options15685;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15685);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15703 = (function() {
var drop_down15703 = null;
var drop_down15703__2 = (function (name,options){return drop_down15703.call(null,name,options,null);
});
var drop_down15703__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15703 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15703__2.call(this,name,options);
case 3:
return drop_down15703__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15703.cljs$core$IFn$_invoke$arity$2 = drop_down15703__2;
drop_down15703.cljs$core$IFn$_invoke$arity$3 = drop_down15703__3;
return drop_down15703;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15703);
/**
* Creates a text area element.
*/
sablono.core.text_area15704 = (function() {
var text_area15704 = null;
var text_area15704__1 = (function (name){return text_area15704.call(null,name,null);
});
var text_area15704__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15704 = function(name,value){
switch(arguments.length){
case 1:
return text_area15704__1.call(this,name);
case 2:
return text_area15704__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15704.cljs$core$IFn$_invoke$arity$1 = text_area15704__1;
text_area15704.cljs$core$IFn$_invoke$arity$2 = text_area15704__2;
return text_area15704;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15704);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15705 = (function file_upload15705(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15705);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15706 = (function label15706(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15706);
/**
* Creates a submit button.
*/
sablono.core.submit_button15707 = (function submit_button15707(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15707);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15708 = (function reset_button15708(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15708);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15709 = (function() { 
var form_to15709__delegate = function (p__15710,body){var vec__15712 = p__15710;var method = cljs.core.nth.call(null,vec__15712,0,null);var action = cljs.core.nth.call(null,vec__15712,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15709 = function (p__15710,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15709__delegate.call(this,p__15710,body);};
form_to15709.cljs$lang$maxFixedArity = 1;
form_to15709.cljs$lang$applyTo = (function (arglist__15713){
var p__15710 = cljs.core.first(arglist__15713);
var body = cljs.core.rest(arglist__15713);
return form_to15709__delegate(p__15710,body);
});
form_to15709.cljs$core$IFn$_invoke$arity$variadic = form_to15709__delegate;
return form_to15709;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15709);

//# sourceMappingURL=core.js.map