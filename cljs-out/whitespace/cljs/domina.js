// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_18981 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18982 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_18983 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18983,opt_wrapper_18981,table_section_wrapper_18982,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18981,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18982,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18982,cell_wrapper_18983,table_section_wrapper_18982,table_section_wrapper_18982]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18988 = cljs.core.seq.call(null,tbody);var chunk__18989 = null;var count__18990 = (0);var i__18991 = (0);while(true){
if((i__18991 < count__18990))
{var child = cljs.core._nth.call(null,chunk__18989,i__18991);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18992 = seq__18988;
var G__18993 = chunk__18989;
var G__18994 = count__18990;
var G__18995 = (i__18991 + (1));
seq__18988 = G__18992;
chunk__18989 = G__18993;
count__18990 = G__18994;
i__18991 = G__18995;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18988);if(temp__4126__auto__)
{var seq__18988__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18988__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18988__$1);{
var G__18996 = cljs.core.chunk_rest.call(null,seq__18988__$1);
var G__18997 = c__4299__auto__;
var G__18998 = cljs.core.count.call(null,c__4299__auto__);
var G__18999 = (0);
seq__18988 = G__18996;
chunk__18989 = G__18997;
count__18990 = G__18998;
i__18991 = G__18999;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18988__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19000 = cljs.core.next.call(null,seq__18988__$1);
var G__19001 = null;
var G__19002 = (0);
var G__19003 = (0);
seq__18988 = G__19000;
chunk__18989 = G__19001;
count__18990 = G__19002;
i__18991 = G__19003;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19005 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19005,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19005,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19005,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19006 = wrapper.lastChild;
var G__19007 = (level - (1));
wrapper = G__19006;
level = G__19007;
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
domina.DomContent = (function (){var obj19009 = {};return obj19009;
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
log_debug.cljs$lang$applyTo = (function (arglist__19010){
var mesg = cljs.core.seq(arglist__19010);
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
log.cljs$lang$applyTo = (function (arglist__19011){
var mesg = cljs.core.seq(arglist__19011);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19012){
var contents = cljs.core.seq(arglist__19012);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19013_SHARP_){return p1__19013_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19014_SHARP_,p2__19015_SHARP_){return goog.dom.insertChildAt(p1__19014_SHARP_,p2__19015_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19017_SHARP_,p2__19016_SHARP_){return goog.dom.insertSiblingBefore(p2__19016_SHARP_,p1__19017_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19019_SHARP_,p2__19018_SHARP_){return goog.dom.insertSiblingAfter(p2__19018_SHARP_,p1__19019_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19021_SHARP_,p2__19020_SHARP_){return goog.dom.replaceNode(p2__19020_SHARP_,p1__19021_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19026_19030 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19027_19031 = null;var count__19028_19032 = (0);var i__19029_19033 = (0);while(true){
if((i__19029_19033 < count__19028_19032))
{var n_19034 = cljs.core._nth.call(null,chunk__19027_19031,i__19029_19033);goog.style.setStyle(n_19034,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19035 = seq__19026_19030;
var G__19036 = chunk__19027_19031;
var G__19037 = count__19028_19032;
var G__19038 = (i__19029_19033 + (1));
seq__19026_19030 = G__19035;
chunk__19027_19031 = G__19036;
count__19028_19032 = G__19037;
i__19029_19033 = G__19038;
continue;
}
} else
{var temp__4126__auto___19039 = cljs.core.seq.call(null,seq__19026_19030);if(temp__4126__auto___19039)
{var seq__19026_19040__$1 = temp__4126__auto___19039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19026_19040__$1))
{var c__4299__auto___19041 = cljs.core.chunk_first.call(null,seq__19026_19040__$1);{
var G__19042 = cljs.core.chunk_rest.call(null,seq__19026_19040__$1);
var G__19043 = c__4299__auto___19041;
var G__19044 = cljs.core.count.call(null,c__4299__auto___19041);
var G__19045 = (0);
seq__19026_19030 = G__19042;
chunk__19027_19031 = G__19043;
count__19028_19032 = G__19044;
i__19029_19033 = G__19045;
continue;
}
} else
{var n_19046 = cljs.core.first.call(null,seq__19026_19040__$1);goog.style.setStyle(n_19046,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19047 = cljs.core.next.call(null,seq__19026_19040__$1);
var G__19048 = null;
var G__19049 = (0);
var G__19050 = (0);
seq__19026_19030 = G__19047;
chunk__19027_19031 = G__19048;
count__19028_19032 = G__19049;
i__19029_19033 = G__19050;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19051){
var content = cljs.core.first(arglist__19051);
arglist__19051 = cljs.core.next(arglist__19051);
var name = cljs.core.first(arglist__19051);
var value = cljs.core.rest(arglist__19051);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19056_19060 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19057_19061 = null;var count__19058_19062 = (0);var i__19059_19063 = (0);while(true){
if((i__19059_19063 < count__19058_19062))
{var n_19064 = cljs.core._nth.call(null,chunk__19057_19061,i__19059_19063);n_19064.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19065 = seq__19056_19060;
var G__19066 = chunk__19057_19061;
var G__19067 = count__19058_19062;
var G__19068 = (i__19059_19063 + (1));
seq__19056_19060 = G__19065;
chunk__19057_19061 = G__19066;
count__19058_19062 = G__19067;
i__19059_19063 = G__19068;
continue;
}
} else
{var temp__4126__auto___19069 = cljs.core.seq.call(null,seq__19056_19060);if(temp__4126__auto___19069)
{var seq__19056_19070__$1 = temp__4126__auto___19069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19056_19070__$1))
{var c__4299__auto___19071 = cljs.core.chunk_first.call(null,seq__19056_19070__$1);{
var G__19072 = cljs.core.chunk_rest.call(null,seq__19056_19070__$1);
var G__19073 = c__4299__auto___19071;
var G__19074 = cljs.core.count.call(null,c__4299__auto___19071);
var G__19075 = (0);
seq__19056_19060 = G__19072;
chunk__19057_19061 = G__19073;
count__19058_19062 = G__19074;
i__19059_19063 = G__19075;
continue;
}
} else
{var n_19076 = cljs.core.first.call(null,seq__19056_19070__$1);n_19076.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19077 = cljs.core.next.call(null,seq__19056_19070__$1);
var G__19078 = null;
var G__19079 = (0);
var G__19080 = (0);
seq__19056_19060 = G__19077;
chunk__19057_19061 = G__19078;
count__19058_19062 = G__19079;
i__19059_19063 = G__19080;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19081){
var content = cljs.core.first(arglist__19081);
arglist__19081 = cljs.core.next(arglist__19081);
var name = cljs.core.first(arglist__19081);
var value = cljs.core.rest(arglist__19081);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19086_19090 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19087_19091 = null;var count__19088_19092 = (0);var i__19089_19093 = (0);while(true){
if((i__19089_19093 < count__19088_19092))
{var n_19094 = cljs.core._nth.call(null,chunk__19087_19091,i__19089_19093);n_19094.removeAttribute(cljs.core.name.call(null,name));
{
var G__19095 = seq__19086_19090;
var G__19096 = chunk__19087_19091;
var G__19097 = count__19088_19092;
var G__19098 = (i__19089_19093 + (1));
seq__19086_19090 = G__19095;
chunk__19087_19091 = G__19096;
count__19088_19092 = G__19097;
i__19089_19093 = G__19098;
continue;
}
} else
{var temp__4126__auto___19099 = cljs.core.seq.call(null,seq__19086_19090);if(temp__4126__auto___19099)
{var seq__19086_19100__$1 = temp__4126__auto___19099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19086_19100__$1))
{var c__4299__auto___19101 = cljs.core.chunk_first.call(null,seq__19086_19100__$1);{
var G__19102 = cljs.core.chunk_rest.call(null,seq__19086_19100__$1);
var G__19103 = c__4299__auto___19101;
var G__19104 = cljs.core.count.call(null,c__4299__auto___19101);
var G__19105 = (0);
seq__19086_19090 = G__19102;
chunk__19087_19091 = G__19103;
count__19088_19092 = G__19104;
i__19089_19093 = G__19105;
continue;
}
} else
{var n_19106 = cljs.core.first.call(null,seq__19086_19100__$1);n_19106.removeAttribute(cljs.core.name.call(null,name));
{
var G__19107 = cljs.core.next.call(null,seq__19086_19100__$1);
var G__19108 = null;
var G__19109 = (0);
var G__19110 = (0);
seq__19086_19090 = G__19107;
chunk__19087_19091 = G__19108;
count__19088_19092 = G__19109;
i__19089_19093 = G__19110;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19112 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19112,(0),null);var v = cljs.core.nth.call(null,vec__19112,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__19113_SHARP_){var attr = attrs__$1.item(p1__19113_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19120_19126 = cljs.core.seq.call(null,styles);var chunk__19121_19127 = null;var count__19122_19128 = (0);var i__19123_19129 = (0);while(true){
if((i__19123_19129 < count__19122_19128))
{var vec__19124_19130 = cljs.core._nth.call(null,chunk__19121_19127,i__19123_19129);var name_19131 = cljs.core.nth.call(null,vec__19124_19130,(0),null);var value_19132 = cljs.core.nth.call(null,vec__19124_19130,(1),null);domina.set_style_BANG_.call(null,content,name_19131,value_19132);
{
var G__19133 = seq__19120_19126;
var G__19134 = chunk__19121_19127;
var G__19135 = count__19122_19128;
var G__19136 = (i__19123_19129 + (1));
seq__19120_19126 = G__19133;
chunk__19121_19127 = G__19134;
count__19122_19128 = G__19135;
i__19123_19129 = G__19136;
continue;
}
} else
{var temp__4126__auto___19137 = cljs.core.seq.call(null,seq__19120_19126);if(temp__4126__auto___19137)
{var seq__19120_19138__$1 = temp__4126__auto___19137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19120_19138__$1))
{var c__4299__auto___19139 = cljs.core.chunk_first.call(null,seq__19120_19138__$1);{
var G__19140 = cljs.core.chunk_rest.call(null,seq__19120_19138__$1);
var G__19141 = c__4299__auto___19139;
var G__19142 = cljs.core.count.call(null,c__4299__auto___19139);
var G__19143 = (0);
seq__19120_19126 = G__19140;
chunk__19121_19127 = G__19141;
count__19122_19128 = G__19142;
i__19123_19129 = G__19143;
continue;
}
} else
{var vec__19125_19144 = cljs.core.first.call(null,seq__19120_19138__$1);var name_19145 = cljs.core.nth.call(null,vec__19125_19144,(0),null);var value_19146 = cljs.core.nth.call(null,vec__19125_19144,(1),null);domina.set_style_BANG_.call(null,content,name_19145,value_19146);
{
var G__19147 = cljs.core.next.call(null,seq__19120_19138__$1);
var G__19148 = null;
var G__19149 = (0);
var G__19150 = (0);
seq__19120_19126 = G__19147;
chunk__19121_19127 = G__19148;
count__19122_19128 = G__19149;
i__19123_19129 = G__19150;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19157_19163 = cljs.core.seq.call(null,attrs);var chunk__19158_19164 = null;var count__19159_19165 = (0);var i__19160_19166 = (0);while(true){
if((i__19160_19166 < count__19159_19165))
{var vec__19161_19167 = cljs.core._nth.call(null,chunk__19158_19164,i__19160_19166);var name_19168 = cljs.core.nth.call(null,vec__19161_19167,(0),null);var value_19169 = cljs.core.nth.call(null,vec__19161_19167,(1),null);domina.set_attr_BANG_.call(null,content,name_19168,value_19169);
{
var G__19170 = seq__19157_19163;
var G__19171 = chunk__19158_19164;
var G__19172 = count__19159_19165;
var G__19173 = (i__19160_19166 + (1));
seq__19157_19163 = G__19170;
chunk__19158_19164 = G__19171;
count__19159_19165 = G__19172;
i__19160_19166 = G__19173;
continue;
}
} else
{var temp__4126__auto___19174 = cljs.core.seq.call(null,seq__19157_19163);if(temp__4126__auto___19174)
{var seq__19157_19175__$1 = temp__4126__auto___19174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19157_19175__$1))
{var c__4299__auto___19176 = cljs.core.chunk_first.call(null,seq__19157_19175__$1);{
var G__19177 = cljs.core.chunk_rest.call(null,seq__19157_19175__$1);
var G__19178 = c__4299__auto___19176;
var G__19179 = cljs.core.count.call(null,c__4299__auto___19176);
var G__19180 = (0);
seq__19157_19163 = G__19177;
chunk__19158_19164 = G__19178;
count__19159_19165 = G__19179;
i__19160_19166 = G__19180;
continue;
}
} else
{var vec__19162_19181 = cljs.core.first.call(null,seq__19157_19175__$1);var name_19182 = cljs.core.nth.call(null,vec__19162_19181,(0),null);var value_19183 = cljs.core.nth.call(null,vec__19162_19181,(1),null);domina.set_attr_BANG_.call(null,content,name_19182,value_19183);
{
var G__19184 = cljs.core.next.call(null,seq__19157_19175__$1);
var G__19185 = null;
var G__19186 = (0);
var G__19187 = (0);
seq__19157_19163 = G__19184;
chunk__19158_19164 = G__19185;
count__19159_19165 = G__19186;
i__19160_19166 = G__19187;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19192_19196 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19193_19197 = null;var count__19194_19198 = (0);var i__19195_19199 = (0);while(true){
if((i__19195_19199 < count__19194_19198))
{var node_19200 = cljs.core._nth.call(null,chunk__19193_19197,i__19195_19199);goog.dom.classes.add(node_19200,class$);
{
var G__19201 = seq__19192_19196;
var G__19202 = chunk__19193_19197;
var G__19203 = count__19194_19198;
var G__19204 = (i__19195_19199 + (1));
seq__19192_19196 = G__19201;
chunk__19193_19197 = G__19202;
count__19194_19198 = G__19203;
i__19195_19199 = G__19204;
continue;
}
} else
{var temp__4126__auto___19205 = cljs.core.seq.call(null,seq__19192_19196);if(temp__4126__auto___19205)
{var seq__19192_19206__$1 = temp__4126__auto___19205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19192_19206__$1))
{var c__4299__auto___19207 = cljs.core.chunk_first.call(null,seq__19192_19206__$1);{
var G__19208 = cljs.core.chunk_rest.call(null,seq__19192_19206__$1);
var G__19209 = c__4299__auto___19207;
var G__19210 = cljs.core.count.call(null,c__4299__auto___19207);
var G__19211 = (0);
seq__19192_19196 = G__19208;
chunk__19193_19197 = G__19209;
count__19194_19198 = G__19210;
i__19195_19199 = G__19211;
continue;
}
} else
{var node_19212 = cljs.core.first.call(null,seq__19192_19206__$1);goog.dom.classes.add(node_19212,class$);
{
var G__19213 = cljs.core.next.call(null,seq__19192_19206__$1);
var G__19214 = null;
var G__19215 = (0);
var G__19216 = (0);
seq__19192_19196 = G__19213;
chunk__19193_19197 = G__19214;
count__19194_19198 = G__19215;
i__19195_19199 = G__19216;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19221_19225 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19222_19226 = null;var count__19223_19227 = (0);var i__19224_19228 = (0);while(true){
if((i__19224_19228 < count__19223_19227))
{var node_19229 = cljs.core._nth.call(null,chunk__19222_19226,i__19224_19228);goog.dom.classes.remove(node_19229,class$);
{
var G__19230 = seq__19221_19225;
var G__19231 = chunk__19222_19226;
var G__19232 = count__19223_19227;
var G__19233 = (i__19224_19228 + (1));
seq__19221_19225 = G__19230;
chunk__19222_19226 = G__19231;
count__19223_19227 = G__19232;
i__19224_19228 = G__19233;
continue;
}
} else
{var temp__4126__auto___19234 = cljs.core.seq.call(null,seq__19221_19225);if(temp__4126__auto___19234)
{var seq__19221_19235__$1 = temp__4126__auto___19234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19221_19235__$1))
{var c__4299__auto___19236 = cljs.core.chunk_first.call(null,seq__19221_19235__$1);{
var G__19237 = cljs.core.chunk_rest.call(null,seq__19221_19235__$1);
var G__19238 = c__4299__auto___19236;
var G__19239 = cljs.core.count.call(null,c__4299__auto___19236);
var G__19240 = (0);
seq__19221_19225 = G__19237;
chunk__19222_19226 = G__19238;
count__19223_19227 = G__19239;
i__19224_19228 = G__19240;
continue;
}
} else
{var node_19241 = cljs.core.first.call(null,seq__19221_19235__$1);goog.dom.classes.remove(node_19241,class$);
{
var G__19242 = cljs.core.next.call(null,seq__19221_19235__$1);
var G__19243 = null;
var G__19244 = (0);
var G__19245 = (0);
seq__19221_19225 = G__19242;
chunk__19222_19226 = G__19243;
count__19223_19227 = G__19244;
i__19224_19228 = G__19245;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19250_19254 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19251_19255 = null;var count__19252_19256 = (0);var i__19253_19257 = (0);while(true){
if((i__19253_19257 < count__19252_19256))
{var node_19258 = cljs.core._nth.call(null,chunk__19251_19255,i__19253_19257);goog.dom.classes.toggle(node_19258,class$);
{
var G__19259 = seq__19250_19254;
var G__19260 = chunk__19251_19255;
var G__19261 = count__19252_19256;
var G__19262 = (i__19253_19257 + (1));
seq__19250_19254 = G__19259;
chunk__19251_19255 = G__19260;
count__19252_19256 = G__19261;
i__19253_19257 = G__19262;
continue;
}
} else
{var temp__4126__auto___19263 = cljs.core.seq.call(null,seq__19250_19254);if(temp__4126__auto___19263)
{var seq__19250_19264__$1 = temp__4126__auto___19263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19250_19264__$1))
{var c__4299__auto___19265 = cljs.core.chunk_first.call(null,seq__19250_19264__$1);{
var G__19266 = cljs.core.chunk_rest.call(null,seq__19250_19264__$1);
var G__19267 = c__4299__auto___19265;
var G__19268 = cljs.core.count.call(null,c__4299__auto___19265);
var G__19269 = (0);
seq__19250_19254 = G__19266;
chunk__19251_19255 = G__19267;
count__19252_19256 = G__19268;
i__19253_19257 = G__19269;
continue;
}
} else
{var node_19270 = cljs.core.first.call(null,seq__19250_19264__$1);goog.dom.classes.toggle(node_19270,class$);
{
var G__19271 = cljs.core.next.call(null,seq__19250_19264__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__19250_19254 = G__19271;
chunk__19251_19255 = G__19272;
count__19252_19256 = G__19273;
i__19253_19257 = G__19274;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19283__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19279_19284 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19280_19285 = null;var count__19281_19286 = (0);var i__19282_19287 = (0);while(true){
if((i__19282_19287 < count__19281_19286))
{var node_19288 = cljs.core._nth.call(null,chunk__19280_19285,i__19282_19287);goog.dom.classes.set(node_19288,classes_19283__$1);
{
var G__19289 = seq__19279_19284;
var G__19290 = chunk__19280_19285;
var G__19291 = count__19281_19286;
var G__19292 = (i__19282_19287 + (1));
seq__19279_19284 = G__19289;
chunk__19280_19285 = G__19290;
count__19281_19286 = G__19291;
i__19282_19287 = G__19292;
continue;
}
} else
{var temp__4126__auto___19293 = cljs.core.seq.call(null,seq__19279_19284);if(temp__4126__auto___19293)
{var seq__19279_19294__$1 = temp__4126__auto___19293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19279_19294__$1))
{var c__4299__auto___19295 = cljs.core.chunk_first.call(null,seq__19279_19294__$1);{
var G__19296 = cljs.core.chunk_rest.call(null,seq__19279_19294__$1);
var G__19297 = c__4299__auto___19295;
var G__19298 = cljs.core.count.call(null,c__4299__auto___19295);
var G__19299 = (0);
seq__19279_19284 = G__19296;
chunk__19280_19285 = G__19297;
count__19281_19286 = G__19298;
i__19282_19287 = G__19299;
continue;
}
} else
{var node_19300 = cljs.core.first.call(null,seq__19279_19294__$1);goog.dom.classes.set(node_19300,classes_19283__$1);
{
var G__19301 = cljs.core.next.call(null,seq__19279_19294__$1);
var G__19302 = null;
var G__19303 = (0);
var G__19304 = (0);
seq__19279_19284 = G__19301;
chunk__19280_19285 = G__19302;
count__19281_19286 = G__19303;
i__19282_19287 = G__19304;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19309_19313 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19310_19314 = null;var count__19311_19315 = (0);var i__19312_19316 = (0);while(true){
if((i__19312_19316 < count__19311_19315))
{var node_19317 = cljs.core._nth.call(null,chunk__19310_19314,i__19312_19316);goog.dom.setTextContent(node_19317,value);
{
var G__19318 = seq__19309_19313;
var G__19319 = chunk__19310_19314;
var G__19320 = count__19311_19315;
var G__19321 = (i__19312_19316 + (1));
seq__19309_19313 = G__19318;
chunk__19310_19314 = G__19319;
count__19311_19315 = G__19320;
i__19312_19316 = G__19321;
continue;
}
} else
{var temp__4126__auto___19322 = cljs.core.seq.call(null,seq__19309_19313);if(temp__4126__auto___19322)
{var seq__19309_19323__$1 = temp__4126__auto___19322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19309_19323__$1))
{var c__4299__auto___19324 = cljs.core.chunk_first.call(null,seq__19309_19323__$1);{
var G__19325 = cljs.core.chunk_rest.call(null,seq__19309_19323__$1);
var G__19326 = c__4299__auto___19324;
var G__19327 = cljs.core.count.call(null,c__4299__auto___19324);
var G__19328 = (0);
seq__19309_19313 = G__19325;
chunk__19310_19314 = G__19326;
count__19311_19315 = G__19327;
i__19312_19316 = G__19328;
continue;
}
} else
{var node_19329 = cljs.core.first.call(null,seq__19309_19323__$1);goog.dom.setTextContent(node_19329,value);
{
var G__19330 = cljs.core.next.call(null,seq__19309_19323__$1);
var G__19331 = null;
var G__19332 = (0);
var G__19333 = (0);
seq__19309_19313 = G__19330;
chunk__19310_19314 = G__19331;
count__19311_19315 = G__19332;
i__19312_19316 = G__19333;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19338_19342 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19339_19343 = null;var count__19340_19344 = (0);var i__19341_19345 = (0);while(true){
if((i__19341_19345 < count__19340_19344))
{var node_19346 = cljs.core._nth.call(null,chunk__19339_19343,i__19341_19345);goog.dom.forms.setValue(node_19346,value);
{
var G__19347 = seq__19338_19342;
var G__19348 = chunk__19339_19343;
var G__19349 = count__19340_19344;
var G__19350 = (i__19341_19345 + (1));
seq__19338_19342 = G__19347;
chunk__19339_19343 = G__19348;
count__19340_19344 = G__19349;
i__19341_19345 = G__19350;
continue;
}
} else
{var temp__4126__auto___19351 = cljs.core.seq.call(null,seq__19338_19342);if(temp__4126__auto___19351)
{var seq__19338_19352__$1 = temp__4126__auto___19351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19338_19352__$1))
{var c__4299__auto___19353 = cljs.core.chunk_first.call(null,seq__19338_19352__$1);{
var G__19354 = cljs.core.chunk_rest.call(null,seq__19338_19352__$1);
var G__19355 = c__4299__auto___19353;
var G__19356 = cljs.core.count.call(null,c__4299__auto___19353);
var G__19357 = (0);
seq__19338_19342 = G__19354;
chunk__19339_19343 = G__19355;
count__19340_19344 = G__19356;
i__19341_19345 = G__19357;
continue;
}
} else
{var node_19358 = cljs.core.first.call(null,seq__19338_19352__$1);goog.dom.forms.setValue(node_19358,value);
{
var G__19359 = cljs.core.next.call(null,seq__19338_19352__$1);
var G__19360 = null;
var G__19361 = (0);
var G__19362 = (0);
seq__19338_19342 = G__19359;
chunk__19339_19343 = G__19360;
count__19340_19344 = G__19361;
i__19341_19345 = G__19362;
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
{var value_19373 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19369_19374 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19370_19375 = null;var count__19371_19376 = (0);var i__19372_19377 = (0);while(true){
if((i__19372_19377 < count__19371_19376))
{var node_19378 = cljs.core._nth.call(null,chunk__19370_19375,i__19372_19377);node_19378.innerHTML = value_19373;
{
var G__19379 = seq__19369_19374;
var G__19380 = chunk__19370_19375;
var G__19381 = count__19371_19376;
var G__19382 = (i__19372_19377 + (1));
seq__19369_19374 = G__19379;
chunk__19370_19375 = G__19380;
count__19371_19376 = G__19381;
i__19372_19377 = G__19382;
continue;
}
} else
{var temp__4126__auto___19383 = cljs.core.seq.call(null,seq__19369_19374);if(temp__4126__auto___19383)
{var seq__19369_19384__$1 = temp__4126__auto___19383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19369_19384__$1))
{var c__4299__auto___19385 = cljs.core.chunk_first.call(null,seq__19369_19384__$1);{
var G__19386 = cljs.core.chunk_rest.call(null,seq__19369_19384__$1);
var G__19387 = c__4299__auto___19385;
var G__19388 = cljs.core.count.call(null,c__4299__auto___19385);
var G__19389 = (0);
seq__19369_19374 = G__19386;
chunk__19370_19375 = G__19387;
count__19371_19376 = G__19388;
i__19372_19377 = G__19389;
continue;
}
} else
{var node_19390 = cljs.core.first.call(null,seq__19369_19384__$1);node_19390.innerHTML = value_19373;
{
var G__19391 = cljs.core.next.call(null,seq__19369_19384__$1);
var G__19392 = null;
var G__19393 = (0);
var G__19394 = (0);
seq__19369_19374 = G__19391;
chunk__19370_19375 = G__19392;
count__19371_19376 = G__19393;
i__19372_19377 = G__19394;
continue;
}
}
} else
{}
}
break;
}
}catch (e19368){if((e19368 instanceof Error))
{var e_19395 = e19368;domina.replace_children_BANG_.call(null,content,value_19373);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19368;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19402_19406 = cljs.core.seq.call(null,children);var chunk__19403_19407 = null;var count__19404_19408 = (0);var i__19405_19409 = (0);while(true){
if((i__19405_19409 < count__19404_19408))
{var child_19410 = cljs.core._nth.call(null,chunk__19403_19407,i__19405_19409);frag.appendChild(child_19410);
{
var G__19411 = seq__19402_19406;
var G__19412 = chunk__19403_19407;
var G__19413 = count__19404_19408;
var G__19414 = (i__19405_19409 + (1));
seq__19402_19406 = G__19411;
chunk__19403_19407 = G__19412;
count__19404_19408 = G__19413;
i__19405_19409 = G__19414;
continue;
}
} else
{var temp__4126__auto___19415 = cljs.core.seq.call(null,seq__19402_19406);if(temp__4126__auto___19415)
{var seq__19402_19416__$1 = temp__4126__auto___19415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19402_19416__$1))
{var c__4299__auto___19417 = cljs.core.chunk_first.call(null,seq__19402_19416__$1);{
var G__19418 = cljs.core.chunk_rest.call(null,seq__19402_19416__$1);
var G__19419 = c__4299__auto___19417;
var G__19420 = cljs.core.count.call(null,c__4299__auto___19417);
var G__19421 = (0);
seq__19402_19406 = G__19418;
chunk__19403_19407 = G__19419;
count__19404_19408 = G__19420;
i__19405_19409 = G__19421;
continue;
}
} else
{var child_19422 = cljs.core.first.call(null,seq__19402_19416__$1);frag.appendChild(child_19422);
{
var G__19423 = cljs.core.next.call(null,seq__19402_19416__$1);
var G__19424 = null;
var G__19425 = (0);
var G__19426 = (0);
seq__19402_19406 = G__19423;
chunk__19403_19407 = G__19424;
count__19404_19408 = G__19425;
i__19405_19409 = G__19426;
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
return (function (p1__19396_SHARP_,p2__19397_SHARP_){return f.call(null,p1__19396_SHARP_,p2__19397_SHARP_);
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
{if((function (){var G__19428 = list_thing;if(G__19428)
{var bit__4193__auto__ = (G__19428.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19428.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19428.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19428);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19428);
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
{if((function (){var G__19429 = content;if(G__19429)
{var bit__4193__auto__ = (G__19429.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19429.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19429.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19429);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19429);
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
{if((function (){var G__19430 = content;if(G__19430)
{var bit__4193__auto__ = (G__19430.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19430.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19430.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19430);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19430);
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
