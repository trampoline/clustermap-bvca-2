// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17001__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17000 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17000,0,null);var body = cljs.core.nthnext.call(null,vec__17000,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17001 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17001__delegate.call(this,args);};
G__17001.cljs$lang$maxFixedArity = 0;
G__17001.cljs$lang$applyTo = (function (arglist__17002){
var args = cljs.core.seq(arglist__17002);
return G__17001__delegate(args);
});
G__17001.cljs$core$IFn$_invoke$arity$variadic = G__17001__delegate;
return G__17001;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__17007(s__17008){return (new cljs.core.LazySeq(null,(function (){var s__17008__$1 = s__17008;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17008__$1);if(temp__4092__auto__)
{var s__17008__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17008__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17008__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17010 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17009 = 0;while(true){
if((i__17009 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__17009);cljs.core.chunk_append.call(null,b__17010,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17011 = (i__17009 + 1);
i__17009 = G__17011;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17010),iter__17007.call(null,cljs.core.chunk_rest.call(null,s__17008__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17010),null);
}
} else
{var args = cljs.core.first.call(null,s__17008__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17007.call(null,cljs.core.rest.call(null,s__17008__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__17012_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__17012_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__17017(s__17018){return (new cljs.core.LazySeq(null,(function (){var s__17018__$1 = s__17018;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17018__$1);if(temp__4092__auto__)
{var s__17018__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17018__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17018__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17020 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17019 = 0;while(true){
if((i__17019 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__17019);cljs.core.chunk_append.call(null,b__17020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17021 = (i__17019 + 1);
i__17019 = G__17021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17020),iter__17017.call(null,cljs.core.chunk_rest.call(null,s__17018__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17020),null);
}
} else
{var style = cljs.core.first.call(null,s__17018__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17017.call(null,cljs.core.rest.call(null,s__17018__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17022){
var styles = cljs.core.seq(arglist__17022);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17023 = (function() { 
var link_to17023__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17023 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17023__delegate.call(this,url,content);};
link_to17023.cljs$lang$maxFixedArity = 1;
link_to17023.cljs$lang$applyTo = (function (arglist__17024){
var url = cljs.core.first(arglist__17024);
var content = cljs.core.rest(arglist__17024);
return link_to17023__delegate(url,content);
});
link_to17023.cljs$core$IFn$_invoke$arity$variadic = link_to17023__delegate;
return link_to17023;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17023);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17025 = (function() { 
var mail_to17025__delegate = function (e_mail,p__17026){var vec__17028 = p__17026;var content = cljs.core.nth.call(null,vec__17028,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17025 = function (e_mail,var_args){
var p__17026 = null;if (arguments.length > 1) {
  p__17026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17025__delegate.call(this,e_mail,p__17026);};
mail_to17025.cljs$lang$maxFixedArity = 1;
mail_to17025.cljs$lang$applyTo = (function (arglist__17029){
var e_mail = cljs.core.first(arglist__17029);
var p__17026 = cljs.core.rest(arglist__17029);
return mail_to17025__delegate(e_mail,p__17026);
});
mail_to17025.cljs$core$IFn$_invoke$arity$variadic = mail_to17025__delegate;
return mail_to17025;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17025);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17030 = (function unordered_list17030(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__17035(s__17036){return (new cljs.core.LazySeq(null,(function (){var s__17036__$1 = s__17036;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17036__$1);if(temp__4092__auto__)
{var s__17036__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17036__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17036__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17038 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17037 = 0;while(true){
if((i__17037 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17037);cljs.core.chunk_append.call(null,b__17038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17039 = (i__17037 + 1);
i__17037 = G__17039;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17038),iter__17035.call(null,cljs.core.chunk_rest.call(null,s__17036__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17038),null);
}
} else
{var x = cljs.core.first.call(null,s__17036__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17035.call(null,cljs.core.rest.call(null,s__17036__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17030);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17040 = (function ordered_list17040(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__17045(s__17046){return (new cljs.core.LazySeq(null,(function (){var s__17046__$1 = s__17046;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17046__$1);if(temp__4092__auto__)
{var s__17046__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17046__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17046__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17048 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17047 = 0;while(true){
if((i__17047 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17047);cljs.core.chunk_append.call(null,b__17048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17049 = (i__17047 + 1);
i__17047 = G__17049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17048),iter__17045.call(null,cljs.core.chunk_rest.call(null,s__17046__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17048),null);
}
} else
{var x = cljs.core.first.call(null,s__17046__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17045.call(null,cljs.core.rest.call(null,s__17046__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17040);
/**
* Create an image element.
*/
sablono.core.image17050 = (function() {
var image17050 = null;
var image17050__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17050__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17050 = function(src,alt){
switch(arguments.length){
case 1:
return image17050__1.call(this,src);
case 2:
return image17050__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17050.cljs$core$IFn$_invoke$arity$1 = image17050__1;
image17050.cljs$core$IFn$_invoke$arity$2 = image17050__2;
return image17050;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17050);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17051_SHARP_,p2__17052_SHARP_){return [cljs.core.str(p1__17051_SHARP_),cljs.core.str("["),cljs.core.str(p2__17052_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17053_SHARP_,p2__17054_SHARP_){return [cljs.core.str(p1__17053_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17054_SHARP_)].join('');
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
sablono.core.hidden_field17055 = (function() {
var hidden_field17055 = null;
var hidden_field17055__1 = (function (name){return hidden_field17055.call(null,name,null);
});
var hidden_field17055__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field17055 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field17055__1.call(this,name);
case 2:
return hidden_field17055__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17055.cljs$core$IFn$_invoke$arity$1 = hidden_field17055__1;
hidden_field17055.cljs$core$IFn$_invoke$arity$2 = hidden_field17055__2;
return hidden_field17055;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17055);
/**
* Creates a new text input field.
*/
sablono.core.text_field17056 = (function() {
var text_field17056 = null;
var text_field17056__1 = (function (name){return text_field17056.call(null,name,null);
});
var text_field17056__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field17056 = function(name,value){
switch(arguments.length){
case 1:
return text_field17056__1.call(this,name);
case 2:
return text_field17056__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17056.cljs$core$IFn$_invoke$arity$1 = text_field17056__1;
text_field17056.cljs$core$IFn$_invoke$arity$2 = text_field17056__2;
return text_field17056;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17056);
/**
* Creates a new password field.
*/
sablono.core.password_field17057 = (function() {
var password_field17057 = null;
var password_field17057__1 = (function (name){return password_field17057.call(null,name,null);
});
var password_field17057__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field17057 = function(name,value){
switch(arguments.length){
case 1:
return password_field17057__1.call(this,name);
case 2:
return password_field17057__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17057.cljs$core$IFn$_invoke$arity$1 = password_field17057__1;
password_field17057.cljs$core$IFn$_invoke$arity$2 = password_field17057__2;
return password_field17057;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17057);
/**
* Creates a new email input field.
*/
sablono.core.email_field17058 = (function() {
var email_field17058 = null;
var email_field17058__1 = (function (name){return email_field17058.call(null,name,null);
});
var email_field17058__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field17058 = function(name,value){
switch(arguments.length){
case 1:
return email_field17058__1.call(this,name);
case 2:
return email_field17058__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17058.cljs$core$IFn$_invoke$arity$1 = email_field17058__1;
email_field17058.cljs$core$IFn$_invoke$arity$2 = email_field17058__2;
return email_field17058;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17058);
/**
* Creates a check box.
*/
sablono.core.check_box17059 = (function() {
var check_box17059 = null;
var check_box17059__1 = (function (name){return check_box17059.call(null,name,null);
});
var check_box17059__2 = (function (name,checked_QMARK_){return check_box17059.call(null,name,checked_QMARK_,"true");
});
var check_box17059__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17059 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17059__1.call(this,name);
case 2:
return check_box17059__2.call(this,name,checked_QMARK_);
case 3:
return check_box17059__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17059.cljs$core$IFn$_invoke$arity$1 = check_box17059__1;
check_box17059.cljs$core$IFn$_invoke$arity$2 = check_box17059__2;
check_box17059.cljs$core$IFn$_invoke$arity$3 = check_box17059__3;
return check_box17059;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17059);
/**
* Creates a radio button.
*/
sablono.core.radio_button17060 = (function() {
var radio_button17060 = null;
var radio_button17060__1 = (function (group){return radio_button17060.call(null,group,null);
});
var radio_button17060__2 = (function (group,checked_QMARK_){return radio_button17060.call(null,group,checked_QMARK_,"true");
});
var radio_button17060__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17060 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17060__1.call(this,group);
case 2:
return radio_button17060__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17060__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17060.cljs$core$IFn$_invoke$arity$1 = radio_button17060__1;
radio_button17060.cljs$core$IFn$_invoke$arity$2 = radio_button17060__2;
radio_button17060.cljs$core$IFn$_invoke$arity$3 = radio_button17060__3;
return radio_button17060;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17060);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17061 = (function() {
var select_options17061 = null;
var select_options17061__1 = (function (coll){return select_options17061.call(null,coll,null);
});
var select_options17061__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__17070(s__17071){return (new cljs.core.LazySeq(null,(function (){var s__17071__$1 = s__17071;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17071__$1);if(temp__4092__auto__)
{var s__17071__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17071__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17071__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17073 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17072 = 0;while(true){
if((i__17072 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17072);cljs.core.chunk_append.call(null,b__17073,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17076 = x;var text = cljs.core.nth.call(null,vec__17076,0,null);var val = cljs.core.nth.call(null,vec__17076,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17061.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17078 = (i__17072 + 1);
i__17072 = G__17078;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17073),iter__17070.call(null,cljs.core.chunk_rest.call(null,s__17071__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17073),null);
}
} else
{var x = cljs.core.first.call(null,s__17071__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17077 = x;var text = cljs.core.nth.call(null,vec__17077,0,null);var val = cljs.core.nth.call(null,vec__17077,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17061.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17070.call(null,cljs.core.rest.call(null,s__17071__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options17061 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17061__1.call(this,coll);
case 2:
return select_options17061__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17061.cljs$core$IFn$_invoke$arity$1 = select_options17061__1;
select_options17061.cljs$core$IFn$_invoke$arity$2 = select_options17061__2;
return select_options17061;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17061);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17079 = (function() {
var drop_down17079 = null;
var drop_down17079__2 = (function (name,options){return drop_down17079.call(null,name,options,null);
});
var drop_down17079__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17079 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17079__2.call(this,name,options);
case 3:
return drop_down17079__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17079.cljs$core$IFn$_invoke$arity$2 = drop_down17079__2;
drop_down17079.cljs$core$IFn$_invoke$arity$3 = drop_down17079__3;
return drop_down17079;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17079);
/**
* Creates a text area element.
*/
sablono.core.text_area17080 = (function() {
var text_area17080 = null;
var text_area17080__1 = (function (name){return text_area17080.call(null,name,null);
});
var text_area17080__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17080 = function(name,value){
switch(arguments.length){
case 1:
return text_area17080__1.call(this,name);
case 2:
return text_area17080__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17080.cljs$core$IFn$_invoke$arity$1 = text_area17080__1;
text_area17080.cljs$core$IFn$_invoke$arity$2 = text_area17080__2;
return text_area17080;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17080);
/**
* Creates a file upload input.
*/
sablono.core.file_upload17081 = (function file_upload17081(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload17081);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17082 = (function label17082(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17082);
/**
* Creates a submit button.
*/
sablono.core.submit_button17083 = (function submit_button17083(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17083);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17084 = (function reset_button17084(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17084);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17085 = (function() { 
var form_to17085__delegate = function (p__17086,body){var vec__17088 = p__17086;var method = cljs.core.nth.call(null,vec__17088,0,null);var action = cljs.core.nth.call(null,vec__17088,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17085 = function (p__17086,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17085__delegate.call(this,p__17086,body);};
form_to17085.cljs$lang$maxFixedArity = 1;
form_to17085.cljs$lang$applyTo = (function (arglist__17089){
var p__17086 = cljs.core.first(arglist__17089);
var body = cljs.core.rest(arglist__17089);
return form_to17085__delegate(p__17086,body);
});
form_to17085.cljs$core$IFn$_invoke$arity$variadic = form_to17085__delegate;
return form_to17085;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17085);
