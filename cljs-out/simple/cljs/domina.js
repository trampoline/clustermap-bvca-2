// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_31973 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31974 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_31975 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_31975,opt_wrapper_31973,table_section_wrapper_31974,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_31973,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_31974,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_31974,cell_wrapper_31975,table_section_wrapper_31974,table_section_wrapper_31974]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__31980 = cljs.core.seq.call(null,tbody);var chunk__31981 = null;var count__31982 = (0);var i__31983 = (0);while(true){
if((i__31983 < count__31982))
{var child = cljs.core._nth.call(null,chunk__31981,i__31983);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31984 = seq__31980;
var G__31985 = chunk__31981;
var G__31986 = count__31982;
var G__31987 = (i__31983 + (1));
seq__31980 = G__31984;
chunk__31981 = G__31985;
count__31982 = G__31986;
i__31983 = G__31987;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31980);if(temp__4126__auto__)
{var seq__31980__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31980__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31980__$1);{
var G__31988 = cljs.core.chunk_rest.call(null,seq__31980__$1);
var G__31989 = c__4314__auto__;
var G__31990 = cljs.core.count.call(null,c__4314__auto__);
var G__31991 = (0);
seq__31980 = G__31988;
chunk__31981 = G__31989;
count__31982 = G__31990;
i__31983 = G__31991;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__31980__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31992 = cljs.core.next.call(null,seq__31980__$1);
var G__31993 = null;
var G__31994 = (0);
var G__31995 = (0);
seq__31980 = G__31992;
chunk__31981 = G__31993;
count__31982 = G__31994;
i__31983 = G__31995;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__31997 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__31997,(0),null);var start_wrap = cljs.core.nth.call(null,vec__31997,(1),null);var end_wrap = cljs.core.nth.call(null,vec__31997,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__31998 = wrapper.lastChild;
var G__31999 = (level - (1));
wrapper = G__31998;
level = G__31999;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj32001 = {};return obj32001;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__32002){
var mesg = cljs.core.seq(arglist__32002);
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
log.cljs$lang$applyTo = (function (arglist__32003){
var mesg = cljs.core.seq(arglist__32003);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32004){
var contents = cljs.core.seq(arglist__32004);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__32005_SHARP_){return p1__32005_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__32006_SHARP_,p2__32007_SHARP_){return goog.dom.insertChildAt(p1__32006_SHARP_,p2__32007_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32009_SHARP_,p2__32008_SHARP_){return goog.dom.insertSiblingBefore(p2__32008_SHARP_,p1__32009_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32011_SHARP_,p2__32010_SHARP_){return goog.dom.insertSiblingAfter(p2__32010_SHARP_,p1__32011_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__32013_SHARP_,p2__32012_SHARP_){return goog.dom.replaceNode(p2__32012_SHARP_,p1__32013_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32018_32022 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32019_32023 = null;var count__32020_32024 = (0);var i__32021_32025 = (0);while(true){
if((i__32021_32025 < count__32020_32024))
{var n_32026 = cljs.core._nth.call(null,chunk__32019_32023,i__32021_32025);goog.style.setStyle(n_32026,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32027 = seq__32018_32022;
var G__32028 = chunk__32019_32023;
var G__32029 = count__32020_32024;
var G__32030 = (i__32021_32025 + (1));
seq__32018_32022 = G__32027;
chunk__32019_32023 = G__32028;
count__32020_32024 = G__32029;
i__32021_32025 = G__32030;
continue;
}
} else
{var temp__4126__auto___32031 = cljs.core.seq.call(null,seq__32018_32022);if(temp__4126__auto___32031)
{var seq__32018_32032__$1 = temp__4126__auto___32031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32018_32032__$1))
{var c__4314__auto___32033 = cljs.core.chunk_first.call(null,seq__32018_32032__$1);{
var G__32034 = cljs.core.chunk_rest.call(null,seq__32018_32032__$1);
var G__32035 = c__4314__auto___32033;
var G__32036 = cljs.core.count.call(null,c__4314__auto___32033);
var G__32037 = (0);
seq__32018_32022 = G__32034;
chunk__32019_32023 = G__32035;
count__32020_32024 = G__32036;
i__32021_32025 = G__32037;
continue;
}
} else
{var n_32038 = cljs.core.first.call(null,seq__32018_32032__$1);goog.style.setStyle(n_32038,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32039 = cljs.core.next.call(null,seq__32018_32032__$1);
var G__32040 = null;
var G__32041 = (0);
var G__32042 = (0);
seq__32018_32022 = G__32039;
chunk__32019_32023 = G__32040;
count__32020_32024 = G__32041;
i__32021_32025 = G__32042;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32043){
var content = cljs.core.first(arglist__32043);
arglist__32043 = cljs.core.next(arglist__32043);
var name = cljs.core.first(arglist__32043);
var value = cljs.core.rest(arglist__32043);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32048_32052 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32049_32053 = null;var count__32050_32054 = (0);var i__32051_32055 = (0);while(true){
if((i__32051_32055 < count__32050_32054))
{var n_32056 = cljs.core._nth.call(null,chunk__32049_32053,i__32051_32055);n_32056.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32057 = seq__32048_32052;
var G__32058 = chunk__32049_32053;
var G__32059 = count__32050_32054;
var G__32060 = (i__32051_32055 + (1));
seq__32048_32052 = G__32057;
chunk__32049_32053 = G__32058;
count__32050_32054 = G__32059;
i__32051_32055 = G__32060;
continue;
}
} else
{var temp__4126__auto___32061 = cljs.core.seq.call(null,seq__32048_32052);if(temp__4126__auto___32061)
{var seq__32048_32062__$1 = temp__4126__auto___32061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32048_32062__$1))
{var c__4314__auto___32063 = cljs.core.chunk_first.call(null,seq__32048_32062__$1);{
var G__32064 = cljs.core.chunk_rest.call(null,seq__32048_32062__$1);
var G__32065 = c__4314__auto___32063;
var G__32066 = cljs.core.count.call(null,c__4314__auto___32063);
var G__32067 = (0);
seq__32048_32052 = G__32064;
chunk__32049_32053 = G__32065;
count__32050_32054 = G__32066;
i__32051_32055 = G__32067;
continue;
}
} else
{var n_32068 = cljs.core.first.call(null,seq__32048_32062__$1);n_32068.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32069 = cljs.core.next.call(null,seq__32048_32062__$1);
var G__32070 = null;
var G__32071 = (0);
var G__32072 = (0);
seq__32048_32052 = G__32069;
chunk__32049_32053 = G__32070;
count__32050_32054 = G__32071;
i__32051_32055 = G__32072;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32073){
var content = cljs.core.first(arglist__32073);
arglist__32073 = cljs.core.next(arglist__32073);
var name = cljs.core.first(arglist__32073);
var value = cljs.core.rest(arglist__32073);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32078_32082 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32079_32083 = null;var count__32080_32084 = (0);var i__32081_32085 = (0);while(true){
if((i__32081_32085 < count__32080_32084))
{var n_32086 = cljs.core._nth.call(null,chunk__32079_32083,i__32081_32085);n_32086.removeAttribute(cljs.core.name.call(null,name));
{
var G__32087 = seq__32078_32082;
var G__32088 = chunk__32079_32083;
var G__32089 = count__32080_32084;
var G__32090 = (i__32081_32085 + (1));
seq__32078_32082 = G__32087;
chunk__32079_32083 = G__32088;
count__32080_32084 = G__32089;
i__32081_32085 = G__32090;
continue;
}
} else
{var temp__4126__auto___32091 = cljs.core.seq.call(null,seq__32078_32082);if(temp__4126__auto___32091)
{var seq__32078_32092__$1 = temp__4126__auto___32091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32078_32092__$1))
{var c__4314__auto___32093 = cljs.core.chunk_first.call(null,seq__32078_32092__$1);{
var G__32094 = cljs.core.chunk_rest.call(null,seq__32078_32092__$1);
var G__32095 = c__4314__auto___32093;
var G__32096 = cljs.core.count.call(null,c__4314__auto___32093);
var G__32097 = (0);
seq__32078_32082 = G__32094;
chunk__32079_32083 = G__32095;
count__32080_32084 = G__32096;
i__32081_32085 = G__32097;
continue;
}
} else
{var n_32098 = cljs.core.first.call(null,seq__32078_32092__$1);n_32098.removeAttribute(cljs.core.name.call(null,name));
{
var G__32099 = cljs.core.next.call(null,seq__32078_32092__$1);
var G__32100 = null;
var G__32101 = (0);
var G__32102 = (0);
seq__32078_32082 = G__32099;
chunk__32079_32083 = G__32100;
count__32080_32084 = G__32101;
i__32081_32085 = G__32102;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32104 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32104,(0),null);var v = cljs.core.nth.call(null,vec__32104,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__32105_SHARP_){var attr = attrs__$1.item(p1__32105_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32112_32118 = cljs.core.seq.call(null,styles);var chunk__32113_32119 = null;var count__32114_32120 = (0);var i__32115_32121 = (0);while(true){
if((i__32115_32121 < count__32114_32120))
{var vec__32116_32122 = cljs.core._nth.call(null,chunk__32113_32119,i__32115_32121);var name_32123 = cljs.core.nth.call(null,vec__32116_32122,(0),null);var value_32124 = cljs.core.nth.call(null,vec__32116_32122,(1),null);domina.set_style_BANG_.call(null,content,name_32123,value_32124);
{
var G__32125 = seq__32112_32118;
var G__32126 = chunk__32113_32119;
var G__32127 = count__32114_32120;
var G__32128 = (i__32115_32121 + (1));
seq__32112_32118 = G__32125;
chunk__32113_32119 = G__32126;
count__32114_32120 = G__32127;
i__32115_32121 = G__32128;
continue;
}
} else
{var temp__4126__auto___32129 = cljs.core.seq.call(null,seq__32112_32118);if(temp__4126__auto___32129)
{var seq__32112_32130__$1 = temp__4126__auto___32129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32112_32130__$1))
{var c__4314__auto___32131 = cljs.core.chunk_first.call(null,seq__32112_32130__$1);{
var G__32132 = cljs.core.chunk_rest.call(null,seq__32112_32130__$1);
var G__32133 = c__4314__auto___32131;
var G__32134 = cljs.core.count.call(null,c__4314__auto___32131);
var G__32135 = (0);
seq__32112_32118 = G__32132;
chunk__32113_32119 = G__32133;
count__32114_32120 = G__32134;
i__32115_32121 = G__32135;
continue;
}
} else
{var vec__32117_32136 = cljs.core.first.call(null,seq__32112_32130__$1);var name_32137 = cljs.core.nth.call(null,vec__32117_32136,(0),null);var value_32138 = cljs.core.nth.call(null,vec__32117_32136,(1),null);domina.set_style_BANG_.call(null,content,name_32137,value_32138);
{
var G__32139 = cljs.core.next.call(null,seq__32112_32130__$1);
var G__32140 = null;
var G__32141 = (0);
var G__32142 = (0);
seq__32112_32118 = G__32139;
chunk__32113_32119 = G__32140;
count__32114_32120 = G__32141;
i__32115_32121 = G__32142;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32149_32155 = cljs.core.seq.call(null,attrs);var chunk__32150_32156 = null;var count__32151_32157 = (0);var i__32152_32158 = (0);while(true){
if((i__32152_32158 < count__32151_32157))
{var vec__32153_32159 = cljs.core._nth.call(null,chunk__32150_32156,i__32152_32158);var name_32160 = cljs.core.nth.call(null,vec__32153_32159,(0),null);var value_32161 = cljs.core.nth.call(null,vec__32153_32159,(1),null);domina.set_attr_BANG_.call(null,content,name_32160,value_32161);
{
var G__32162 = seq__32149_32155;
var G__32163 = chunk__32150_32156;
var G__32164 = count__32151_32157;
var G__32165 = (i__32152_32158 + (1));
seq__32149_32155 = G__32162;
chunk__32150_32156 = G__32163;
count__32151_32157 = G__32164;
i__32152_32158 = G__32165;
continue;
}
} else
{var temp__4126__auto___32166 = cljs.core.seq.call(null,seq__32149_32155);if(temp__4126__auto___32166)
{var seq__32149_32167__$1 = temp__4126__auto___32166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32149_32167__$1))
{var c__4314__auto___32168 = cljs.core.chunk_first.call(null,seq__32149_32167__$1);{
var G__32169 = cljs.core.chunk_rest.call(null,seq__32149_32167__$1);
var G__32170 = c__4314__auto___32168;
var G__32171 = cljs.core.count.call(null,c__4314__auto___32168);
var G__32172 = (0);
seq__32149_32155 = G__32169;
chunk__32150_32156 = G__32170;
count__32151_32157 = G__32171;
i__32152_32158 = G__32172;
continue;
}
} else
{var vec__32154_32173 = cljs.core.first.call(null,seq__32149_32167__$1);var name_32174 = cljs.core.nth.call(null,vec__32154_32173,(0),null);var value_32175 = cljs.core.nth.call(null,vec__32154_32173,(1),null);domina.set_attr_BANG_.call(null,content,name_32174,value_32175);
{
var G__32176 = cljs.core.next.call(null,seq__32149_32167__$1);
var G__32177 = null;
var G__32178 = (0);
var G__32179 = (0);
seq__32149_32155 = G__32176;
chunk__32150_32156 = G__32177;
count__32151_32157 = G__32178;
i__32152_32158 = G__32179;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32184_32188 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32185_32189 = null;var count__32186_32190 = (0);var i__32187_32191 = (0);while(true){
if((i__32187_32191 < count__32186_32190))
{var node_32192 = cljs.core._nth.call(null,chunk__32185_32189,i__32187_32191);goog.dom.classes.add(node_32192,class$);
{
var G__32193 = seq__32184_32188;
var G__32194 = chunk__32185_32189;
var G__32195 = count__32186_32190;
var G__32196 = (i__32187_32191 + (1));
seq__32184_32188 = G__32193;
chunk__32185_32189 = G__32194;
count__32186_32190 = G__32195;
i__32187_32191 = G__32196;
continue;
}
} else
{var temp__4126__auto___32197 = cljs.core.seq.call(null,seq__32184_32188);if(temp__4126__auto___32197)
{var seq__32184_32198__$1 = temp__4126__auto___32197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32184_32198__$1))
{var c__4314__auto___32199 = cljs.core.chunk_first.call(null,seq__32184_32198__$1);{
var G__32200 = cljs.core.chunk_rest.call(null,seq__32184_32198__$1);
var G__32201 = c__4314__auto___32199;
var G__32202 = cljs.core.count.call(null,c__4314__auto___32199);
var G__32203 = (0);
seq__32184_32188 = G__32200;
chunk__32185_32189 = G__32201;
count__32186_32190 = G__32202;
i__32187_32191 = G__32203;
continue;
}
} else
{var node_32204 = cljs.core.first.call(null,seq__32184_32198__$1);goog.dom.classes.add(node_32204,class$);
{
var G__32205 = cljs.core.next.call(null,seq__32184_32198__$1);
var G__32206 = null;
var G__32207 = (0);
var G__32208 = (0);
seq__32184_32188 = G__32205;
chunk__32185_32189 = G__32206;
count__32186_32190 = G__32207;
i__32187_32191 = G__32208;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__32213_32217 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32214_32218 = null;var count__32215_32219 = (0);var i__32216_32220 = (0);while(true){
if((i__32216_32220 < count__32215_32219))
{var node_32221 = cljs.core._nth.call(null,chunk__32214_32218,i__32216_32220);goog.dom.classes.remove(node_32221,class$);
{
var G__32222 = seq__32213_32217;
var G__32223 = chunk__32214_32218;
var G__32224 = count__32215_32219;
var G__32225 = (i__32216_32220 + (1));
seq__32213_32217 = G__32222;
chunk__32214_32218 = G__32223;
count__32215_32219 = G__32224;
i__32216_32220 = G__32225;
continue;
}
} else
{var temp__4126__auto___32226 = cljs.core.seq.call(null,seq__32213_32217);if(temp__4126__auto___32226)
{var seq__32213_32227__$1 = temp__4126__auto___32226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32213_32227__$1))
{var c__4314__auto___32228 = cljs.core.chunk_first.call(null,seq__32213_32227__$1);{
var G__32229 = cljs.core.chunk_rest.call(null,seq__32213_32227__$1);
var G__32230 = c__4314__auto___32228;
var G__32231 = cljs.core.count.call(null,c__4314__auto___32228);
var G__32232 = (0);
seq__32213_32217 = G__32229;
chunk__32214_32218 = G__32230;
count__32215_32219 = G__32231;
i__32216_32220 = G__32232;
continue;
}
} else
{var node_32233 = cljs.core.first.call(null,seq__32213_32227__$1);goog.dom.classes.remove(node_32233,class$);
{
var G__32234 = cljs.core.next.call(null,seq__32213_32227__$1);
var G__32235 = null;
var G__32236 = (0);
var G__32237 = (0);
seq__32213_32217 = G__32234;
chunk__32214_32218 = G__32235;
count__32215_32219 = G__32236;
i__32216_32220 = G__32237;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__32242_32246 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32243_32247 = null;var count__32244_32248 = (0);var i__32245_32249 = (0);while(true){
if((i__32245_32249 < count__32244_32248))
{var node_32250 = cljs.core._nth.call(null,chunk__32243_32247,i__32245_32249);goog.dom.classes.toggle(node_32250,class$);
{
var G__32251 = seq__32242_32246;
var G__32252 = chunk__32243_32247;
var G__32253 = count__32244_32248;
var G__32254 = (i__32245_32249 + (1));
seq__32242_32246 = G__32251;
chunk__32243_32247 = G__32252;
count__32244_32248 = G__32253;
i__32245_32249 = G__32254;
continue;
}
} else
{var temp__4126__auto___32255 = cljs.core.seq.call(null,seq__32242_32246);if(temp__4126__auto___32255)
{var seq__32242_32256__$1 = temp__4126__auto___32255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32242_32256__$1))
{var c__4314__auto___32257 = cljs.core.chunk_first.call(null,seq__32242_32256__$1);{
var G__32258 = cljs.core.chunk_rest.call(null,seq__32242_32256__$1);
var G__32259 = c__4314__auto___32257;
var G__32260 = cljs.core.count.call(null,c__4314__auto___32257);
var G__32261 = (0);
seq__32242_32246 = G__32258;
chunk__32243_32247 = G__32259;
count__32244_32248 = G__32260;
i__32245_32249 = G__32261;
continue;
}
} else
{var node_32262 = cljs.core.first.call(null,seq__32242_32256__$1);goog.dom.classes.toggle(node_32262,class$);
{
var G__32263 = cljs.core.next.call(null,seq__32242_32256__$1);
var G__32264 = null;
var G__32265 = (0);
var G__32266 = (0);
seq__32242_32246 = G__32263;
chunk__32243_32247 = G__32264;
count__32244_32248 = G__32265;
i__32245_32249 = G__32266;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_32275__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__32271_32276 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32272_32277 = null;var count__32273_32278 = (0);var i__32274_32279 = (0);while(true){
if((i__32274_32279 < count__32273_32278))
{var node_32280 = cljs.core._nth.call(null,chunk__32272_32277,i__32274_32279);goog.dom.classes.set(node_32280,classes_32275__$1);
{
var G__32281 = seq__32271_32276;
var G__32282 = chunk__32272_32277;
var G__32283 = count__32273_32278;
var G__32284 = (i__32274_32279 + (1));
seq__32271_32276 = G__32281;
chunk__32272_32277 = G__32282;
count__32273_32278 = G__32283;
i__32274_32279 = G__32284;
continue;
}
} else
{var temp__4126__auto___32285 = cljs.core.seq.call(null,seq__32271_32276);if(temp__4126__auto___32285)
{var seq__32271_32286__$1 = temp__4126__auto___32285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32271_32286__$1))
{var c__4314__auto___32287 = cljs.core.chunk_first.call(null,seq__32271_32286__$1);{
var G__32288 = cljs.core.chunk_rest.call(null,seq__32271_32286__$1);
var G__32289 = c__4314__auto___32287;
var G__32290 = cljs.core.count.call(null,c__4314__auto___32287);
var G__32291 = (0);
seq__32271_32276 = G__32288;
chunk__32272_32277 = G__32289;
count__32273_32278 = G__32290;
i__32274_32279 = G__32291;
continue;
}
} else
{var node_32292 = cljs.core.first.call(null,seq__32271_32286__$1);goog.dom.classes.set(node_32292,classes_32275__$1);
{
var G__32293 = cljs.core.next.call(null,seq__32271_32286__$1);
var G__32294 = null;
var G__32295 = (0);
var G__32296 = (0);
seq__32271_32276 = G__32293;
chunk__32272_32277 = G__32294;
count__32273_32278 = G__32295;
i__32274_32279 = G__32296;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__32301_32305 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32302_32306 = null;var count__32303_32307 = (0);var i__32304_32308 = (0);while(true){
if((i__32304_32308 < count__32303_32307))
{var node_32309 = cljs.core._nth.call(null,chunk__32302_32306,i__32304_32308);goog.dom.setTextContent(node_32309,value);
{
var G__32310 = seq__32301_32305;
var G__32311 = chunk__32302_32306;
var G__32312 = count__32303_32307;
var G__32313 = (i__32304_32308 + (1));
seq__32301_32305 = G__32310;
chunk__32302_32306 = G__32311;
count__32303_32307 = G__32312;
i__32304_32308 = G__32313;
continue;
}
} else
{var temp__4126__auto___32314 = cljs.core.seq.call(null,seq__32301_32305);if(temp__4126__auto___32314)
{var seq__32301_32315__$1 = temp__4126__auto___32314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32301_32315__$1))
{var c__4314__auto___32316 = cljs.core.chunk_first.call(null,seq__32301_32315__$1);{
var G__32317 = cljs.core.chunk_rest.call(null,seq__32301_32315__$1);
var G__32318 = c__4314__auto___32316;
var G__32319 = cljs.core.count.call(null,c__4314__auto___32316);
var G__32320 = (0);
seq__32301_32305 = G__32317;
chunk__32302_32306 = G__32318;
count__32303_32307 = G__32319;
i__32304_32308 = G__32320;
continue;
}
} else
{var node_32321 = cljs.core.first.call(null,seq__32301_32315__$1);goog.dom.setTextContent(node_32321,value);
{
var G__32322 = cljs.core.next.call(null,seq__32301_32315__$1);
var G__32323 = null;
var G__32324 = (0);
var G__32325 = (0);
seq__32301_32305 = G__32322;
chunk__32302_32306 = G__32323;
count__32303_32307 = G__32324;
i__32304_32308 = G__32325;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__32330_32334 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32331_32335 = null;var count__32332_32336 = (0);var i__32333_32337 = (0);while(true){
if((i__32333_32337 < count__32332_32336))
{var node_32338 = cljs.core._nth.call(null,chunk__32331_32335,i__32333_32337);goog.dom.forms.setValue(node_32338,value);
{
var G__32339 = seq__32330_32334;
var G__32340 = chunk__32331_32335;
var G__32341 = count__32332_32336;
var G__32342 = (i__32333_32337 + (1));
seq__32330_32334 = G__32339;
chunk__32331_32335 = G__32340;
count__32332_32336 = G__32341;
i__32333_32337 = G__32342;
continue;
}
} else
{var temp__4126__auto___32343 = cljs.core.seq.call(null,seq__32330_32334);if(temp__4126__auto___32343)
{var seq__32330_32344__$1 = temp__4126__auto___32343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32330_32344__$1))
{var c__4314__auto___32345 = cljs.core.chunk_first.call(null,seq__32330_32344__$1);{
var G__32346 = cljs.core.chunk_rest.call(null,seq__32330_32344__$1);
var G__32347 = c__4314__auto___32345;
var G__32348 = cljs.core.count.call(null,c__4314__auto___32345);
var G__32349 = (0);
seq__32330_32334 = G__32346;
chunk__32331_32335 = G__32347;
count__32332_32336 = G__32348;
i__32333_32337 = G__32349;
continue;
}
} else
{var node_32350 = cljs.core.first.call(null,seq__32330_32344__$1);goog.dom.forms.setValue(node_32350,value);
{
var G__32351 = cljs.core.next.call(null,seq__32330_32344__$1);
var G__32352 = null;
var G__32353 = (0);
var G__32354 = (0);
seq__32330_32334 = G__32351;
chunk__32331_32335 = G__32352;
count__32332_32336 = G__32353;
i__32333_32337 = G__32354;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_32365 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__32361_32366 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32362_32367 = null;var count__32363_32368 = (0);var i__32364_32369 = (0);while(true){
if((i__32364_32369 < count__32363_32368))
{var node_32370 = cljs.core._nth.call(null,chunk__32362_32367,i__32364_32369);node_32370.innerHTML = value_32365;
{
var G__32371 = seq__32361_32366;
var G__32372 = chunk__32362_32367;
var G__32373 = count__32363_32368;
var G__32374 = (i__32364_32369 + (1));
seq__32361_32366 = G__32371;
chunk__32362_32367 = G__32372;
count__32363_32368 = G__32373;
i__32364_32369 = G__32374;
continue;
}
} else
{var temp__4126__auto___32375 = cljs.core.seq.call(null,seq__32361_32366);if(temp__4126__auto___32375)
{var seq__32361_32376__$1 = temp__4126__auto___32375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32361_32376__$1))
{var c__4314__auto___32377 = cljs.core.chunk_first.call(null,seq__32361_32376__$1);{
var G__32378 = cljs.core.chunk_rest.call(null,seq__32361_32376__$1);
var G__32379 = c__4314__auto___32377;
var G__32380 = cljs.core.count.call(null,c__4314__auto___32377);
var G__32381 = (0);
seq__32361_32366 = G__32378;
chunk__32362_32367 = G__32379;
count__32363_32368 = G__32380;
i__32364_32369 = G__32381;
continue;
}
} else
{var node_32382 = cljs.core.first.call(null,seq__32361_32376__$1);node_32382.innerHTML = value_32365;
{
var G__32383 = cljs.core.next.call(null,seq__32361_32376__$1);
var G__32384 = null;
var G__32385 = (0);
var G__32386 = (0);
seq__32361_32366 = G__32383;
chunk__32362_32367 = G__32384;
count__32363_32368 = G__32385;
i__32364_32369 = G__32386;
continue;
}
}
} else
{}
}
break;
}
}catch (e32360){if((e32360 instanceof Error))
{var e_32387 = e32360;domina.replace_children_BANG_.call(null,content,value_32365);
} else
{throw e32360;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__32394_32398 = cljs.core.seq.call(null,children);var chunk__32395_32399 = null;var count__32396_32400 = (0);var i__32397_32401 = (0);while(true){
if((i__32397_32401 < count__32396_32400))
{var child_32402 = cljs.core._nth.call(null,chunk__32395_32399,i__32397_32401);frag.appendChild(child_32402);
{
var G__32403 = seq__32394_32398;
var G__32404 = chunk__32395_32399;
var G__32405 = count__32396_32400;
var G__32406 = (i__32397_32401 + (1));
seq__32394_32398 = G__32403;
chunk__32395_32399 = G__32404;
count__32396_32400 = G__32405;
i__32397_32401 = G__32406;
continue;
}
} else
{var temp__4126__auto___32407 = cljs.core.seq.call(null,seq__32394_32398);if(temp__4126__auto___32407)
{var seq__32394_32408__$1 = temp__4126__auto___32407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32394_32408__$1))
{var c__4314__auto___32409 = cljs.core.chunk_first.call(null,seq__32394_32408__$1);{
var G__32410 = cljs.core.chunk_rest.call(null,seq__32394_32408__$1);
var G__32411 = c__4314__auto___32409;
var G__32412 = cljs.core.count.call(null,c__4314__auto___32409);
var G__32413 = (0);
seq__32394_32398 = G__32410;
chunk__32395_32399 = G__32411;
count__32396_32400 = G__32412;
i__32397_32401 = G__32413;
continue;
}
} else
{var child_32414 = cljs.core.first.call(null,seq__32394_32408__$1);frag.appendChild(child_32414);
{
var G__32415 = cljs.core.next.call(null,seq__32394_32408__$1);
var G__32416 = null;
var G__32417 = (0);
var G__32418 = (0);
seq__32394_32398 = G__32415;
chunk__32395_32399 = G__32416;
count__32396_32400 = G__32417;
i__32397_32401 = G__32418;
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
return (function (p1__32388_SHARP_,p2__32389_SHARP_){return f.call(null,p1__32388_SHARP_,p2__32389_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__32420 = list_thing;if(G__32420)
{var bit__4208__auto__ = (G__32420.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__32420.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32420.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32420);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32420);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__32421 = content;if(G__32421)
{var bit__4208__auto__ = (G__32421.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__32421.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32421);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32421);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__32422 = content;if(G__32422)
{var bit__4208__auto__ = (G__32422.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__32422.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32422.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32422);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32422);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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
