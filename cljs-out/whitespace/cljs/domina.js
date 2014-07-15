// Compiled by ClojureScript 0.0-2261
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_18017 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18018 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_18019 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18019,opt_wrapper_18017,table_section_wrapper_18018,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18017,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18018,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18018,cell_wrapper_18019,table_section_wrapper_18018,table_section_wrapper_18018]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18024 = cljs.core.seq.call(null,tbody);var chunk__18025 = null;var count__18026 = (0);var i__18027 = (0);while(true){
if((i__18027 < count__18026))
{var child = cljs.core._nth.call(null,chunk__18025,i__18027);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18028 = seq__18024;
var G__18029 = chunk__18025;
var G__18030 = count__18026;
var G__18031 = (i__18027 + (1));
seq__18024 = G__18028;
chunk__18025 = G__18029;
count__18026 = G__18030;
i__18027 = G__18031;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18024);if(temp__4126__auto__)
{var seq__18024__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18024__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18024__$1);{
var G__18032 = cljs.core.chunk_rest.call(null,seq__18024__$1);
var G__18033 = c__4299__auto__;
var G__18034 = cljs.core.count.call(null,c__4299__auto__);
var G__18035 = (0);
seq__18024 = G__18032;
chunk__18025 = G__18033;
count__18026 = G__18034;
i__18027 = G__18035;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18024__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18036 = cljs.core.next.call(null,seq__18024__$1);
var G__18037 = null;
var G__18038 = (0);
var G__18039 = (0);
seq__18024 = G__18036;
chunk__18025 = G__18037;
count__18026 = G__18038;
i__18027 = G__18039;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__18041 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__18041,(0),null);var start_wrap = cljs.core.nth.call(null,vec__18041,(1),null);var end_wrap = cljs.core.nth.call(null,vec__18041,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__18042 = wrapper.lastChild;
var G__18043 = (level - (1));
wrapper = G__18042;
level = G__18043;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj18045 = {};return obj18045;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__18046){
var mesg = cljs.core.seq(arglist__18046);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__18047){
var mesg = cljs.core.seq(arglist__18047);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__18048){
var contents = cljs.core.seq(arglist__18048);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__18049_SHARP_){return p1__18049_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__18050_SHARP_,p2__18051_SHARP_){return goog.dom.insertChildAt(p1__18050_SHARP_,p2__18051_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18053_SHARP_,p2__18052_SHARP_){return goog.dom.insertSiblingBefore(p2__18052_SHARP_,p1__18053_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18055_SHARP_,p2__18054_SHARP_){return goog.dom.insertSiblingAfter(p2__18054_SHARP_,p1__18055_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__18057_SHARP_,p2__18056_SHARP_){return goog.dom.replaceNode(p2__18056_SHARP_,p1__18057_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__18062_18066 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18063_18067 = null;var count__18064_18068 = (0);var i__18065_18069 = (0);while(true){
if((i__18065_18069 < count__18064_18068))
{var n_18070 = cljs.core._nth.call(null,chunk__18063_18067,i__18065_18069);goog.style.setStyle(n_18070,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18071 = seq__18062_18066;
var G__18072 = chunk__18063_18067;
var G__18073 = count__18064_18068;
var G__18074 = (i__18065_18069 + (1));
seq__18062_18066 = G__18071;
chunk__18063_18067 = G__18072;
count__18064_18068 = G__18073;
i__18065_18069 = G__18074;
continue;
}
} else
{var temp__4126__auto___18075 = cljs.core.seq.call(null,seq__18062_18066);if(temp__4126__auto___18075)
{var seq__18062_18076__$1 = temp__4126__auto___18075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18062_18076__$1))
{var c__4299__auto___18077 = cljs.core.chunk_first.call(null,seq__18062_18076__$1);{
var G__18078 = cljs.core.chunk_rest.call(null,seq__18062_18076__$1);
var G__18079 = c__4299__auto___18077;
var G__18080 = cljs.core.count.call(null,c__4299__auto___18077);
var G__18081 = (0);
seq__18062_18066 = G__18078;
chunk__18063_18067 = G__18079;
count__18064_18068 = G__18080;
i__18065_18069 = G__18081;
continue;
}
} else
{var n_18082 = cljs.core.first.call(null,seq__18062_18076__$1);goog.style.setStyle(n_18082,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18083 = cljs.core.next.call(null,seq__18062_18076__$1);
var G__18084 = null;
var G__18085 = (0);
var G__18086 = (0);
seq__18062_18066 = G__18083;
chunk__18063_18067 = G__18084;
count__18064_18068 = G__18085;
i__18065_18069 = G__18086;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18087){
var content = cljs.core.first(arglist__18087);
arglist__18087 = cljs.core.next(arglist__18087);
var name = cljs.core.first(arglist__18087);
var value = cljs.core.rest(arglist__18087);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__18092_18096 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18093_18097 = null;var count__18094_18098 = (0);var i__18095_18099 = (0);while(true){
if((i__18095_18099 < count__18094_18098))
{var n_18100 = cljs.core._nth.call(null,chunk__18093_18097,i__18095_18099);n_18100.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18101 = seq__18092_18096;
var G__18102 = chunk__18093_18097;
var G__18103 = count__18094_18098;
var G__18104 = (i__18095_18099 + (1));
seq__18092_18096 = G__18101;
chunk__18093_18097 = G__18102;
count__18094_18098 = G__18103;
i__18095_18099 = G__18104;
continue;
}
} else
{var temp__4126__auto___18105 = cljs.core.seq.call(null,seq__18092_18096);if(temp__4126__auto___18105)
{var seq__18092_18106__$1 = temp__4126__auto___18105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18092_18106__$1))
{var c__4299__auto___18107 = cljs.core.chunk_first.call(null,seq__18092_18106__$1);{
var G__18108 = cljs.core.chunk_rest.call(null,seq__18092_18106__$1);
var G__18109 = c__4299__auto___18107;
var G__18110 = cljs.core.count.call(null,c__4299__auto___18107);
var G__18111 = (0);
seq__18092_18096 = G__18108;
chunk__18093_18097 = G__18109;
count__18094_18098 = G__18110;
i__18095_18099 = G__18111;
continue;
}
} else
{var n_18112 = cljs.core.first.call(null,seq__18092_18106__$1);n_18112.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18113 = cljs.core.next.call(null,seq__18092_18106__$1);
var G__18114 = null;
var G__18115 = (0);
var G__18116 = (0);
seq__18092_18096 = G__18113;
chunk__18093_18097 = G__18114;
count__18094_18098 = G__18115;
i__18095_18099 = G__18116;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__18117){
var content = cljs.core.first(arglist__18117);
arglist__18117 = cljs.core.next(arglist__18117);
var name = cljs.core.first(arglist__18117);
var value = cljs.core.rest(arglist__18117);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__18122_18126 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18123_18127 = null;var count__18124_18128 = (0);var i__18125_18129 = (0);while(true){
if((i__18125_18129 < count__18124_18128))
{var n_18130 = cljs.core._nth.call(null,chunk__18123_18127,i__18125_18129);n_18130.removeAttribute(cljs.core.name.call(null,name));
{
var G__18131 = seq__18122_18126;
var G__18132 = chunk__18123_18127;
var G__18133 = count__18124_18128;
var G__18134 = (i__18125_18129 + (1));
seq__18122_18126 = G__18131;
chunk__18123_18127 = G__18132;
count__18124_18128 = G__18133;
i__18125_18129 = G__18134;
continue;
}
} else
{var temp__4126__auto___18135 = cljs.core.seq.call(null,seq__18122_18126);if(temp__4126__auto___18135)
{var seq__18122_18136__$1 = temp__4126__auto___18135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18122_18136__$1))
{var c__4299__auto___18137 = cljs.core.chunk_first.call(null,seq__18122_18136__$1);{
var G__18138 = cljs.core.chunk_rest.call(null,seq__18122_18136__$1);
var G__18139 = c__4299__auto___18137;
var G__18140 = cljs.core.count.call(null,c__4299__auto___18137);
var G__18141 = (0);
seq__18122_18126 = G__18138;
chunk__18123_18127 = G__18139;
count__18124_18128 = G__18140;
i__18125_18129 = G__18141;
continue;
}
} else
{var n_18142 = cljs.core.first.call(null,seq__18122_18136__$1);n_18142.removeAttribute(cljs.core.name.call(null,name));
{
var G__18143 = cljs.core.next.call(null,seq__18122_18136__$1);
var G__18144 = null;
var G__18145 = (0);
var G__18146 = (0);
seq__18122_18126 = G__18143;
chunk__18123_18127 = G__18144;
count__18124_18128 = G__18145;
i__18125_18129 = G__18146;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18148 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18148,(0),null);var v = cljs.core.nth.call(null,vec__18148,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__18149_SHARP_){var attr = attrs__$1.item(p1__18149_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18156_18162 = cljs.core.seq.call(null,styles);var chunk__18157_18163 = null;var count__18158_18164 = (0);var i__18159_18165 = (0);while(true){
if((i__18159_18165 < count__18158_18164))
{var vec__18160_18166 = cljs.core._nth.call(null,chunk__18157_18163,i__18159_18165);var name_18167 = cljs.core.nth.call(null,vec__18160_18166,(0),null);var value_18168 = cljs.core.nth.call(null,vec__18160_18166,(1),null);domina.set_style_BANG_.call(null,content,name_18167,value_18168);
{
var G__18169 = seq__18156_18162;
var G__18170 = chunk__18157_18163;
var G__18171 = count__18158_18164;
var G__18172 = (i__18159_18165 + (1));
seq__18156_18162 = G__18169;
chunk__18157_18163 = G__18170;
count__18158_18164 = G__18171;
i__18159_18165 = G__18172;
continue;
}
} else
{var temp__4126__auto___18173 = cljs.core.seq.call(null,seq__18156_18162);if(temp__4126__auto___18173)
{var seq__18156_18174__$1 = temp__4126__auto___18173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18156_18174__$1))
{var c__4299__auto___18175 = cljs.core.chunk_first.call(null,seq__18156_18174__$1);{
var G__18176 = cljs.core.chunk_rest.call(null,seq__18156_18174__$1);
var G__18177 = c__4299__auto___18175;
var G__18178 = cljs.core.count.call(null,c__4299__auto___18175);
var G__18179 = (0);
seq__18156_18162 = G__18176;
chunk__18157_18163 = G__18177;
count__18158_18164 = G__18178;
i__18159_18165 = G__18179;
continue;
}
} else
{var vec__18161_18180 = cljs.core.first.call(null,seq__18156_18174__$1);var name_18181 = cljs.core.nth.call(null,vec__18161_18180,(0),null);var value_18182 = cljs.core.nth.call(null,vec__18161_18180,(1),null);domina.set_style_BANG_.call(null,content,name_18181,value_18182);
{
var G__18183 = cljs.core.next.call(null,seq__18156_18174__$1);
var G__18184 = null;
var G__18185 = (0);
var G__18186 = (0);
seq__18156_18162 = G__18183;
chunk__18157_18163 = G__18184;
count__18158_18164 = G__18185;
i__18159_18165 = G__18186;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18193_18199 = cljs.core.seq.call(null,attrs);var chunk__18194_18200 = null;var count__18195_18201 = (0);var i__18196_18202 = (0);while(true){
if((i__18196_18202 < count__18195_18201))
{var vec__18197_18203 = cljs.core._nth.call(null,chunk__18194_18200,i__18196_18202);var name_18204 = cljs.core.nth.call(null,vec__18197_18203,(0),null);var value_18205 = cljs.core.nth.call(null,vec__18197_18203,(1),null);domina.set_attr_BANG_.call(null,content,name_18204,value_18205);
{
var G__18206 = seq__18193_18199;
var G__18207 = chunk__18194_18200;
var G__18208 = count__18195_18201;
var G__18209 = (i__18196_18202 + (1));
seq__18193_18199 = G__18206;
chunk__18194_18200 = G__18207;
count__18195_18201 = G__18208;
i__18196_18202 = G__18209;
continue;
}
} else
{var temp__4126__auto___18210 = cljs.core.seq.call(null,seq__18193_18199);if(temp__4126__auto___18210)
{var seq__18193_18211__$1 = temp__4126__auto___18210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18193_18211__$1))
{var c__4299__auto___18212 = cljs.core.chunk_first.call(null,seq__18193_18211__$1);{
var G__18213 = cljs.core.chunk_rest.call(null,seq__18193_18211__$1);
var G__18214 = c__4299__auto___18212;
var G__18215 = cljs.core.count.call(null,c__4299__auto___18212);
var G__18216 = (0);
seq__18193_18199 = G__18213;
chunk__18194_18200 = G__18214;
count__18195_18201 = G__18215;
i__18196_18202 = G__18216;
continue;
}
} else
{var vec__18198_18217 = cljs.core.first.call(null,seq__18193_18211__$1);var name_18218 = cljs.core.nth.call(null,vec__18198_18217,(0),null);var value_18219 = cljs.core.nth.call(null,vec__18198_18217,(1),null);domina.set_attr_BANG_.call(null,content,name_18218,value_18219);
{
var G__18220 = cljs.core.next.call(null,seq__18193_18211__$1);
var G__18221 = null;
var G__18222 = (0);
var G__18223 = (0);
seq__18193_18199 = G__18220;
chunk__18194_18200 = G__18221;
count__18195_18201 = G__18222;
i__18196_18202 = G__18223;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18228_18232 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18229_18233 = null;var count__18230_18234 = (0);var i__18231_18235 = (0);while(true){
if((i__18231_18235 < count__18230_18234))
{var node_18236 = cljs.core._nth.call(null,chunk__18229_18233,i__18231_18235);goog.dom.classes.add(node_18236,class$);
{
var G__18237 = seq__18228_18232;
var G__18238 = chunk__18229_18233;
var G__18239 = count__18230_18234;
var G__18240 = (i__18231_18235 + (1));
seq__18228_18232 = G__18237;
chunk__18229_18233 = G__18238;
count__18230_18234 = G__18239;
i__18231_18235 = G__18240;
continue;
}
} else
{var temp__4126__auto___18241 = cljs.core.seq.call(null,seq__18228_18232);if(temp__4126__auto___18241)
{var seq__18228_18242__$1 = temp__4126__auto___18241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18228_18242__$1))
{var c__4299__auto___18243 = cljs.core.chunk_first.call(null,seq__18228_18242__$1);{
var G__18244 = cljs.core.chunk_rest.call(null,seq__18228_18242__$1);
var G__18245 = c__4299__auto___18243;
var G__18246 = cljs.core.count.call(null,c__4299__auto___18243);
var G__18247 = (0);
seq__18228_18232 = G__18244;
chunk__18229_18233 = G__18245;
count__18230_18234 = G__18246;
i__18231_18235 = G__18247;
continue;
}
} else
{var node_18248 = cljs.core.first.call(null,seq__18228_18242__$1);goog.dom.classes.add(node_18248,class$);
{
var G__18249 = cljs.core.next.call(null,seq__18228_18242__$1);
var G__18250 = null;
var G__18251 = (0);
var G__18252 = (0);
seq__18228_18232 = G__18249;
chunk__18229_18233 = G__18250;
count__18230_18234 = G__18251;
i__18231_18235 = G__18252;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18257_18261 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18258_18262 = null;var count__18259_18263 = (0);var i__18260_18264 = (0);while(true){
if((i__18260_18264 < count__18259_18263))
{var node_18265 = cljs.core._nth.call(null,chunk__18258_18262,i__18260_18264);goog.dom.classes.remove(node_18265,class$);
{
var G__18266 = seq__18257_18261;
var G__18267 = chunk__18258_18262;
var G__18268 = count__18259_18263;
var G__18269 = (i__18260_18264 + (1));
seq__18257_18261 = G__18266;
chunk__18258_18262 = G__18267;
count__18259_18263 = G__18268;
i__18260_18264 = G__18269;
continue;
}
} else
{var temp__4126__auto___18270 = cljs.core.seq.call(null,seq__18257_18261);if(temp__4126__auto___18270)
{var seq__18257_18271__$1 = temp__4126__auto___18270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18257_18271__$1))
{var c__4299__auto___18272 = cljs.core.chunk_first.call(null,seq__18257_18271__$1);{
var G__18273 = cljs.core.chunk_rest.call(null,seq__18257_18271__$1);
var G__18274 = c__4299__auto___18272;
var G__18275 = cljs.core.count.call(null,c__4299__auto___18272);
var G__18276 = (0);
seq__18257_18261 = G__18273;
chunk__18258_18262 = G__18274;
count__18259_18263 = G__18275;
i__18260_18264 = G__18276;
continue;
}
} else
{var node_18277 = cljs.core.first.call(null,seq__18257_18271__$1);goog.dom.classes.remove(node_18277,class$);
{
var G__18278 = cljs.core.next.call(null,seq__18257_18271__$1);
var G__18279 = null;
var G__18280 = (0);
var G__18281 = (0);
seq__18257_18261 = G__18278;
chunk__18258_18262 = G__18279;
count__18259_18263 = G__18280;
i__18260_18264 = G__18281;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18286_18290 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18287_18291 = null;var count__18288_18292 = (0);var i__18289_18293 = (0);while(true){
if((i__18289_18293 < count__18288_18292))
{var node_18294 = cljs.core._nth.call(null,chunk__18287_18291,i__18289_18293);goog.dom.classes.toggle(node_18294,class$);
{
var G__18295 = seq__18286_18290;
var G__18296 = chunk__18287_18291;
var G__18297 = count__18288_18292;
var G__18298 = (i__18289_18293 + (1));
seq__18286_18290 = G__18295;
chunk__18287_18291 = G__18296;
count__18288_18292 = G__18297;
i__18289_18293 = G__18298;
continue;
}
} else
{var temp__4126__auto___18299 = cljs.core.seq.call(null,seq__18286_18290);if(temp__4126__auto___18299)
{var seq__18286_18300__$1 = temp__4126__auto___18299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18286_18300__$1))
{var c__4299__auto___18301 = cljs.core.chunk_first.call(null,seq__18286_18300__$1);{
var G__18302 = cljs.core.chunk_rest.call(null,seq__18286_18300__$1);
var G__18303 = c__4299__auto___18301;
var G__18304 = cljs.core.count.call(null,c__4299__auto___18301);
var G__18305 = (0);
seq__18286_18290 = G__18302;
chunk__18287_18291 = G__18303;
count__18288_18292 = G__18304;
i__18289_18293 = G__18305;
continue;
}
} else
{var node_18306 = cljs.core.first.call(null,seq__18286_18300__$1);goog.dom.classes.toggle(node_18306,class$);
{
var G__18307 = cljs.core.next.call(null,seq__18286_18300__$1);
var G__18308 = null;
var G__18309 = (0);
var G__18310 = (0);
seq__18286_18290 = G__18307;
chunk__18287_18291 = G__18308;
count__18288_18292 = G__18309;
i__18289_18293 = G__18310;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_18319__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__18315_18320 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18316_18321 = null;var count__18317_18322 = (0);var i__18318_18323 = (0);while(true){
if((i__18318_18323 < count__18317_18322))
{var node_18324 = cljs.core._nth.call(null,chunk__18316_18321,i__18318_18323);goog.dom.classes.set(node_18324,classes_18319__$1);
{
var G__18325 = seq__18315_18320;
var G__18326 = chunk__18316_18321;
var G__18327 = count__18317_18322;
var G__18328 = (i__18318_18323 + (1));
seq__18315_18320 = G__18325;
chunk__18316_18321 = G__18326;
count__18317_18322 = G__18327;
i__18318_18323 = G__18328;
continue;
}
} else
{var temp__4126__auto___18329 = cljs.core.seq.call(null,seq__18315_18320);if(temp__4126__auto___18329)
{var seq__18315_18330__$1 = temp__4126__auto___18329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18315_18330__$1))
{var c__4299__auto___18331 = cljs.core.chunk_first.call(null,seq__18315_18330__$1);{
var G__18332 = cljs.core.chunk_rest.call(null,seq__18315_18330__$1);
var G__18333 = c__4299__auto___18331;
var G__18334 = cljs.core.count.call(null,c__4299__auto___18331);
var G__18335 = (0);
seq__18315_18320 = G__18332;
chunk__18316_18321 = G__18333;
count__18317_18322 = G__18334;
i__18318_18323 = G__18335;
continue;
}
} else
{var node_18336 = cljs.core.first.call(null,seq__18315_18330__$1);goog.dom.classes.set(node_18336,classes_18319__$1);
{
var G__18337 = cljs.core.next.call(null,seq__18315_18330__$1);
var G__18338 = null;
var G__18339 = (0);
var G__18340 = (0);
seq__18315_18320 = G__18337;
chunk__18316_18321 = G__18338;
count__18317_18322 = G__18339;
i__18318_18323 = G__18340;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__18345_18349 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18346_18350 = null;var count__18347_18351 = (0);var i__18348_18352 = (0);while(true){
if((i__18348_18352 < count__18347_18351))
{var node_18353 = cljs.core._nth.call(null,chunk__18346_18350,i__18348_18352);goog.dom.setTextContent(node_18353,value);
{
var G__18354 = seq__18345_18349;
var G__18355 = chunk__18346_18350;
var G__18356 = count__18347_18351;
var G__18357 = (i__18348_18352 + (1));
seq__18345_18349 = G__18354;
chunk__18346_18350 = G__18355;
count__18347_18351 = G__18356;
i__18348_18352 = G__18357;
continue;
}
} else
{var temp__4126__auto___18358 = cljs.core.seq.call(null,seq__18345_18349);if(temp__4126__auto___18358)
{var seq__18345_18359__$1 = temp__4126__auto___18358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18345_18359__$1))
{var c__4299__auto___18360 = cljs.core.chunk_first.call(null,seq__18345_18359__$1);{
var G__18361 = cljs.core.chunk_rest.call(null,seq__18345_18359__$1);
var G__18362 = c__4299__auto___18360;
var G__18363 = cljs.core.count.call(null,c__4299__auto___18360);
var G__18364 = (0);
seq__18345_18349 = G__18361;
chunk__18346_18350 = G__18362;
count__18347_18351 = G__18363;
i__18348_18352 = G__18364;
continue;
}
} else
{var node_18365 = cljs.core.first.call(null,seq__18345_18359__$1);goog.dom.setTextContent(node_18365,value);
{
var G__18366 = cljs.core.next.call(null,seq__18345_18359__$1);
var G__18367 = null;
var G__18368 = (0);
var G__18369 = (0);
seq__18345_18349 = G__18366;
chunk__18346_18350 = G__18367;
count__18347_18351 = G__18368;
i__18348_18352 = G__18369;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__18374_18378 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18375_18379 = null;var count__18376_18380 = (0);var i__18377_18381 = (0);while(true){
if((i__18377_18381 < count__18376_18380))
{var node_18382 = cljs.core._nth.call(null,chunk__18375_18379,i__18377_18381);goog.dom.forms.setValue(node_18382,value);
{
var G__18383 = seq__18374_18378;
var G__18384 = chunk__18375_18379;
var G__18385 = count__18376_18380;
var G__18386 = (i__18377_18381 + (1));
seq__18374_18378 = G__18383;
chunk__18375_18379 = G__18384;
count__18376_18380 = G__18385;
i__18377_18381 = G__18386;
continue;
}
} else
{var temp__4126__auto___18387 = cljs.core.seq.call(null,seq__18374_18378);if(temp__4126__auto___18387)
{var seq__18374_18388__$1 = temp__4126__auto___18387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18374_18388__$1))
{var c__4299__auto___18389 = cljs.core.chunk_first.call(null,seq__18374_18388__$1);{
var G__18390 = cljs.core.chunk_rest.call(null,seq__18374_18388__$1);
var G__18391 = c__4299__auto___18389;
var G__18392 = cljs.core.count.call(null,c__4299__auto___18389);
var G__18393 = (0);
seq__18374_18378 = G__18390;
chunk__18375_18379 = G__18391;
count__18376_18380 = G__18392;
i__18377_18381 = G__18393;
continue;
}
} else
{var node_18394 = cljs.core.first.call(null,seq__18374_18388__$1);goog.dom.forms.setValue(node_18394,value);
{
var G__18395 = cljs.core.next.call(null,seq__18374_18388__$1);
var G__18396 = null;
var G__18397 = (0);
var G__18398 = (0);
seq__18374_18378 = G__18395;
chunk__18375_18379 = G__18396;
count__18376_18380 = G__18397;
i__18377_18381 = G__18398;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_18409 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__18405_18410 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18406_18411 = null;var count__18407_18412 = (0);var i__18408_18413 = (0);while(true){
if((i__18408_18413 < count__18407_18412))
{var node_18414 = cljs.core._nth.call(null,chunk__18406_18411,i__18408_18413);node_18414.innerHTML = value_18409;
{
var G__18415 = seq__18405_18410;
var G__18416 = chunk__18406_18411;
var G__18417 = count__18407_18412;
var G__18418 = (i__18408_18413 + (1));
seq__18405_18410 = G__18415;
chunk__18406_18411 = G__18416;
count__18407_18412 = G__18417;
i__18408_18413 = G__18418;
continue;
}
} else
{var temp__4126__auto___18419 = cljs.core.seq.call(null,seq__18405_18410);if(temp__4126__auto___18419)
{var seq__18405_18420__$1 = temp__4126__auto___18419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18405_18420__$1))
{var c__4299__auto___18421 = cljs.core.chunk_first.call(null,seq__18405_18420__$1);{
var G__18422 = cljs.core.chunk_rest.call(null,seq__18405_18420__$1);
var G__18423 = c__4299__auto___18421;
var G__18424 = cljs.core.count.call(null,c__4299__auto___18421);
var G__18425 = (0);
seq__18405_18410 = G__18422;
chunk__18406_18411 = G__18423;
count__18407_18412 = G__18424;
i__18408_18413 = G__18425;
continue;
}
} else
{var node_18426 = cljs.core.first.call(null,seq__18405_18420__$1);node_18426.innerHTML = value_18409;
{
var G__18427 = cljs.core.next.call(null,seq__18405_18420__$1);
var G__18428 = null;
var G__18429 = (0);
var G__18430 = (0);
seq__18405_18410 = G__18427;
chunk__18406_18411 = G__18428;
count__18407_18412 = G__18429;
i__18408_18413 = G__18430;
continue;
}
}
} else
{}
}
break;
}
}catch (e18404){if((e18404 instanceof Error))
{var e_18431 = e18404;domina.replace_children_BANG_.call(null,content,value_18409);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18404;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__18438_18442 = cljs.core.seq.call(null,children);var chunk__18439_18443 = null;var count__18440_18444 = (0);var i__18441_18445 = (0);while(true){
if((i__18441_18445 < count__18440_18444))
{var child_18446 = cljs.core._nth.call(null,chunk__18439_18443,i__18441_18445);frag.appendChild(child_18446);
{
var G__18447 = seq__18438_18442;
var G__18448 = chunk__18439_18443;
var G__18449 = count__18440_18444;
var G__18450 = (i__18441_18445 + (1));
seq__18438_18442 = G__18447;
chunk__18439_18443 = G__18448;
count__18440_18444 = G__18449;
i__18441_18445 = G__18450;
continue;
}
} else
{var temp__4126__auto___18451 = cljs.core.seq.call(null,seq__18438_18442);if(temp__4126__auto___18451)
{var seq__18438_18452__$1 = temp__4126__auto___18451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18438_18452__$1))
{var c__4299__auto___18453 = cljs.core.chunk_first.call(null,seq__18438_18452__$1);{
var G__18454 = cljs.core.chunk_rest.call(null,seq__18438_18452__$1);
var G__18455 = c__4299__auto___18453;
var G__18456 = cljs.core.count.call(null,c__4299__auto___18453);
var G__18457 = (0);
seq__18438_18442 = G__18454;
chunk__18439_18443 = G__18455;
count__18440_18444 = G__18456;
i__18441_18445 = G__18457;
continue;
}
} else
{var child_18458 = cljs.core.first.call(null,seq__18438_18452__$1);frag.appendChild(child_18458);
{
var G__18459 = cljs.core.next.call(null,seq__18438_18452__$1);
var G__18460 = null;
var G__18461 = (0);
var G__18462 = (0);
seq__18438_18442 = G__18459;
chunk__18439_18443 = G__18460;
count__18440_18444 = G__18461;
i__18441_18445 = G__18462;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__18432_SHARP_,p2__18433_SHARP_){return f.call(null,p1__18432_SHARP_,p2__18433_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__18464 = list_thing;if(G__18464)
{var bit__4193__auto__ = (G__18464.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__18464.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18464.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18464);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18464);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__18465 = content;if(G__18465)
{var bit__4193__auto__ = (G__18465.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__18465.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18465.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18465);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18465);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__18466 = content;if(G__18466)
{var bit__4193__auto__ = (G__18466.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__18466.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18466);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18466);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
