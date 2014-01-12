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
var G__33609__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__33608 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__33608,0,null);var body = cljs.core.nthnext.call(null,vec__33608,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__33609 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33609__delegate.call(this,args);};
G__33609.cljs$lang$maxFixedArity = 0;
G__33609.cljs$lang$applyTo = (function (arglist__33610){
var args = cljs.core.seq(arglist__33610);
return G__33609__delegate(args);
});
G__33609.cljs$core$IFn$_invoke$arity$variadic = G__33609__delegate;
return G__33609;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__33615(s__33616){return (new cljs.core.LazySeq(null,(function (){var s__33616__$1 = s__33616;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33616__$1);if(temp__4092__auto__)
{var s__33616__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33616__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33616__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33618 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33617 = 0;while(true){
if((i__33617 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__33617);cljs.core.chunk_append.call(null,b__33618,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__33619 = (i__33617 + 1);
i__33617 = G__33619;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33618),iter__33615.call(null,cljs.core.chunk_rest.call(null,s__33616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33618),null);
}
} else
{var args = cljs.core.first.call(null,s__33616__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__33615.call(null,cljs.core.rest.call(null,s__33616__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__33624(s__33625){return (new cljs.core.LazySeq(null,(function (){var s__33625__$1 = s__33625;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33625__$1);if(temp__4092__auto__)
{var s__33625__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33625__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33625__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33627 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33626 = 0;while(true){
if((i__33626 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__33626);cljs.core.chunk_append.call(null,b__33627,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__33628 = (i__33626 + 1);
i__33626 = G__33628;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33627),iter__33624.call(null,cljs.core.chunk_rest.call(null,s__33625__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33627),null);
}
} else
{var script = cljs.core.first.call(null,s__33625__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__33624.call(null,cljs.core.rest.call(null,s__33625__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__33629){
var scripts = cljs.core.seq(arglist__33629);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__33634(s__33635){return (new cljs.core.LazySeq(null,(function (){var s__33635__$1 = s__33635;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33635__$1);if(temp__4092__auto__)
{var s__33635__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33635__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33635__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33637 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33636 = 0;while(true){
if((i__33636 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__33636);cljs.core.chunk_append.call(null,b__33637,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__33638 = (i__33636 + 1);
i__33636 = G__33638;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33637),iter__33634.call(null,cljs.core.chunk_rest.call(null,s__33635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33637),null);
}
} else
{var style = cljs.core.first.call(null,s__33635__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__33634.call(null,cljs.core.rest.call(null,s__33635__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__33639){
var styles = cljs.core.seq(arglist__33639);
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
sablono.core.link_to33640 = (function() { 
var link_to33640__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to33640 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to33640__delegate.call(this,url,content);};
link_to33640.cljs$lang$maxFixedArity = 1;
link_to33640.cljs$lang$applyTo = (function (arglist__33641){
var url = cljs.core.first(arglist__33641);
var content = cljs.core.rest(arglist__33641);
return link_to33640__delegate(url,content);
});
link_to33640.cljs$core$IFn$_invoke$arity$variadic = link_to33640__delegate;
return link_to33640;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33640);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to33642 = (function() { 
var mail_to33642__delegate = function (e_mail,p__33643){var vec__33645 = p__33643;var content = cljs.core.nth.call(null,vec__33645,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to33642 = function (e_mail,var_args){
var p__33643 = null;if (arguments.length > 1) {
  p__33643 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to33642__delegate.call(this,e_mail,p__33643);};
mail_to33642.cljs$lang$maxFixedArity = 1;
mail_to33642.cljs$lang$applyTo = (function (arglist__33646){
var e_mail = cljs.core.first(arglist__33646);
var p__33643 = cljs.core.rest(arglist__33646);
return mail_to33642__delegate(e_mail,p__33643);
});
mail_to33642.cljs$core$IFn$_invoke$arity$variadic = mail_to33642__delegate;
return mail_to33642;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33642);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list33647 = (function unordered_list33647(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__33652(s__33653){return (new cljs.core.LazySeq(null,(function (){var s__33653__$1 = s__33653;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33653__$1);if(temp__4092__auto__)
{var s__33653__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33653__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33653__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33655 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33654 = 0;while(true){
if((i__33654 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33654);cljs.core.chunk_append.call(null,b__33655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33656 = (i__33654 + 1);
i__33654 = G__33656;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33655),iter__33652.call(null,cljs.core.chunk_rest.call(null,s__33653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33655),null);
}
} else
{var x = cljs.core.first.call(null,s__33653__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33652.call(null,cljs.core.rest.call(null,s__33653__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33647);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list33657 = (function ordered_list33657(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__33662(s__33663){return (new cljs.core.LazySeq(null,(function (){var s__33663__$1 = s__33663;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33663__$1);if(temp__4092__auto__)
{var s__33663__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33663__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33663__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33665 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33664 = 0;while(true){
if((i__33664 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33664);cljs.core.chunk_append.call(null,b__33665,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33666 = (i__33664 + 1);
i__33664 = G__33666;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33665),iter__33662.call(null,cljs.core.chunk_rest.call(null,s__33663__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33665),null);
}
} else
{var x = cljs.core.first.call(null,s__33663__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33662.call(null,cljs.core.rest.call(null,s__33663__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33657);
/**
* Create an image element.
*/
sablono.core.image33667 = (function() {
var image33667 = null;
var image33667__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image33667__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image33667 = function(src,alt){
switch(arguments.length){
case 1:
return image33667__1.call(this,src);
case 2:
return image33667__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image33667.cljs$core$IFn$_invoke$arity$1 = image33667__1;
image33667.cljs$core$IFn$_invoke$arity$2 = image33667__2;
return image33667;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33667);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__33668_SHARP_,p2__33669_SHARP_){return [cljs.core.str(p1__33668_SHARP_),cljs.core.str("["),cljs.core.str(p2__33669_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__33670_SHARP_,p2__33671_SHARP_){return [cljs.core.str(p1__33670_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33671_SHARP_)].join('');
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
sablono.core.hidden_field33672 = (function() {
var hidden_field33672 = null;
var hidden_field33672__1 = (function (name){return hidden_field33672.call(null,name,null);
});
var hidden_field33672__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field33672 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field33672__1.call(this,name);
case 2:
return hidden_field33672__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field33672.cljs$core$IFn$_invoke$arity$1 = hidden_field33672__1;
hidden_field33672.cljs$core$IFn$_invoke$arity$2 = hidden_field33672__2;
return hidden_field33672;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33672);
/**
* Creates a new text input field.
*/
sablono.core.text_field33673 = (function() {
var text_field33673 = null;
var text_field33673__1 = (function (name){return text_field33673.call(null,name,null);
});
var text_field33673__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field33673 = function(name,value){
switch(arguments.length){
case 1:
return text_field33673__1.call(this,name);
case 2:
return text_field33673__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field33673.cljs$core$IFn$_invoke$arity$1 = text_field33673__1;
text_field33673.cljs$core$IFn$_invoke$arity$2 = text_field33673__2;
return text_field33673;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33673);
/**
* Creates a new password field.
*/
sablono.core.password_field33674 = (function() {
var password_field33674 = null;
var password_field33674__1 = (function (name){return password_field33674.call(null,name,null);
});
var password_field33674__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field33674 = function(name,value){
switch(arguments.length){
case 1:
return password_field33674__1.call(this,name);
case 2:
return password_field33674__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field33674.cljs$core$IFn$_invoke$arity$1 = password_field33674__1;
password_field33674.cljs$core$IFn$_invoke$arity$2 = password_field33674__2;
return password_field33674;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33674);
/**
* Creates a new email input field.
*/
sablono.core.email_field33675 = (function() {
var email_field33675 = null;
var email_field33675__1 = (function (name){return email_field33675.call(null,name,null);
});
var email_field33675__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field33675 = function(name,value){
switch(arguments.length){
case 1:
return email_field33675__1.call(this,name);
case 2:
return email_field33675__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field33675.cljs$core$IFn$_invoke$arity$1 = email_field33675__1;
email_field33675.cljs$core$IFn$_invoke$arity$2 = email_field33675__2;
return email_field33675;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33675);
/**
* Creates a check box.
*/
sablono.core.check_box33676 = (function() {
var check_box33676 = null;
var check_box33676__1 = (function (name){return check_box33676.call(null,name,null);
});
var check_box33676__2 = (function (name,checked_QMARK_){return check_box33676.call(null,name,checked_QMARK_,"true");
});
var check_box33676__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box33676 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box33676__1.call(this,name);
case 2:
return check_box33676__2.call(this,name,checked_QMARK_);
case 3:
return check_box33676__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box33676.cljs$core$IFn$_invoke$arity$1 = check_box33676__1;
check_box33676.cljs$core$IFn$_invoke$arity$2 = check_box33676__2;
check_box33676.cljs$core$IFn$_invoke$arity$3 = check_box33676__3;
return check_box33676;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33676);
/**
* Creates a radio button.
*/
sablono.core.radio_button33677 = (function() {
var radio_button33677 = null;
var radio_button33677__1 = (function (group){return radio_button33677.call(null,group,null);
});
var radio_button33677__2 = (function (group,checked_QMARK_){return radio_button33677.call(null,group,checked_QMARK_,"true");
});
var radio_button33677__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button33677 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button33677__1.call(this,group);
case 2:
return radio_button33677__2.call(this,group,checked_QMARK_);
case 3:
return radio_button33677__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button33677.cljs$core$IFn$_invoke$arity$1 = radio_button33677__1;
radio_button33677.cljs$core$IFn$_invoke$arity$2 = radio_button33677__2;
radio_button33677.cljs$core$IFn$_invoke$arity$3 = radio_button33677__3;
return radio_button33677;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33677);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options33678 = (function() {
var select_options33678 = null;
var select_options33678__1 = (function (coll){return select_options33678.call(null,coll,null);
});
var select_options33678__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__33687(s__33688){return (new cljs.core.LazySeq(null,(function (){var s__33688__$1 = s__33688;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33688__$1);if(temp__4092__auto__)
{var s__33688__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33688__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33688__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33690 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33689 = 0;while(true){
if((i__33689 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33689);cljs.core.chunk_append.call(null,b__33690,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33693 = x;var text = cljs.core.nth.call(null,vec__33693,0,null);var val = cljs.core.nth.call(null,vec__33693,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33678.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__33695 = (i__33689 + 1);
i__33689 = G__33695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33690),iter__33687.call(null,cljs.core.chunk_rest.call(null,s__33688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33690),null);
}
} else
{var x = cljs.core.first.call(null,s__33688__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33694 = x;var text = cljs.core.nth.call(null,vec__33694,0,null);var val = cljs.core.nth.call(null,vec__33694,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33678.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__33687.call(null,cljs.core.rest.call(null,s__33688__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options33678 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options33678__1.call(this,coll);
case 2:
return select_options33678__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options33678.cljs$core$IFn$_invoke$arity$1 = select_options33678__1;
select_options33678.cljs$core$IFn$_invoke$arity$2 = select_options33678__2;
return select_options33678;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33678);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down33696 = (function() {
var drop_down33696 = null;
var drop_down33696__2 = (function (name,options){return drop_down33696.call(null,name,options,null);
});
var drop_down33696__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down33696 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down33696__2.call(this,name,options);
case 3:
return drop_down33696__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down33696.cljs$core$IFn$_invoke$arity$2 = drop_down33696__2;
drop_down33696.cljs$core$IFn$_invoke$arity$3 = drop_down33696__3;
return drop_down33696;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33696);
/**
* Creates a text area element.
*/
sablono.core.text_area33697 = (function() {
var text_area33697 = null;
var text_area33697__1 = (function (name){return text_area33697.call(null,name,null);
});
var text_area33697__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area33697 = function(name,value){
switch(arguments.length){
case 1:
return text_area33697__1.call(this,name);
case 2:
return text_area33697__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area33697.cljs$core$IFn$_invoke$arity$1 = text_area33697__1;
text_area33697.cljs$core$IFn$_invoke$arity$2 = text_area33697__2;
return text_area33697;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33697);
/**
* Creates a file upload input.
*/
sablono.core.file_upload33698 = (function file_upload33698(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload33698);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label33699 = (function label33699(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33699);
/**
* Creates a submit button.
*/
sablono.core.submit_button33700 = (function submit_button33700(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33700);
/**
* Creates a form reset button.
*/
sablono.core.reset_button33701 = (function reset_button33701(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33701);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to33702 = (function() { 
var form_to33702__delegate = function (p__33703,body){var vec__33705 = p__33703;var method = cljs.core.nth.call(null,vec__33705,0,null);var action = cljs.core.nth.call(null,vec__33705,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to33702 = function (p__33703,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to33702__delegate.call(this,p__33703,body);};
form_to33702.cljs$lang$maxFixedArity = 1;
form_to33702.cljs$lang$applyTo = (function (arglist__33706){
var p__33703 = cljs.core.first(arglist__33706);
var body = cljs.core.rest(arglist__33706);
return form_to33702__delegate(p__33703,body);
});
form_to33702.cljs$core$IFn$_invoke$arity$variadic = form_to33702__delegate;
return form_to33702;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33702);
