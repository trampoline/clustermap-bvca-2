// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_15929 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15930 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15931 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15930,table_section_wrapper_15930,opt_wrapper_15929,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15931,table_section_wrapper_15930,cell_wrapper_15931,opt_wrapper_15929,table_section_wrapper_15930,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15930]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15936 = cljs.core.seq.call(null,tbody);var chunk__15937 = null;var count__15938 = 0;var i__15939 = 0;while(true){
if((i__15939 < count__15938))
{var child = cljs.core._nth.call(null,chunk__15937,i__15939);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15940 = seq__15936;
var G__15941 = chunk__15937;
var G__15942 = count__15938;
var G__15943 = (i__15939 + 1);
seq__15936 = G__15940;
chunk__15937 = G__15941;
count__15938 = G__15942;
i__15939 = G__15943;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15936);if(temp__4092__auto__)
{var seq__15936__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15936__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15936__$1);{
var G__15944 = cljs.core.chunk_rest.call(null,seq__15936__$1);
var G__15945 = c__4148__auto__;
var G__15946 = cljs.core.count.call(null,c__4148__auto__);
var G__15947 = 0;
seq__15936 = G__15944;
chunk__15937 = G__15945;
count__15938 = G__15946;
i__15939 = G__15947;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15936__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15948 = cljs.core.next.call(null,seq__15936__$1);
var G__15949 = null;
var G__15950 = 0;
var G__15951 = 0;
seq__15936 = G__15948;
chunk__15937 = G__15949;
count__15938 = G__15950;
i__15939 = G__15951;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15953 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15953,0,null);var start_wrap = cljs.core.nth.call(null,vec__15953,1,null);var end_wrap = cljs.core.nth.call(null,vec__15953,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15954 = wrapper.lastChild;
var G__15955 = (level - 1);
wrapper = G__15954;
level = G__15955;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj15957 = {};return obj15957;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__15958){
var mesg = cljs.core.seq(arglist__15958);
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
log.cljs$lang$applyTo = (function (arglist__15959){
var mesg = cljs.core.seq(arglist__15959);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15960){
var contents = cljs.core.seq(arglist__15960);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15961_SHARP_){return p1__15961_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15962_SHARP_,p2__15963_SHARP_){return goog.dom.insertChildAt(p1__15962_SHARP_,p2__15963_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15965_SHARP_,p2__15964_SHARP_){return goog.dom.insertSiblingBefore(p2__15964_SHARP_,p1__15965_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15967_SHARP_,p2__15966_SHARP_){return goog.dom.insertSiblingAfter(p2__15966_SHARP_,p1__15967_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15969_SHARP_,p2__15968_SHARP_){return goog.dom.replaceNode(p2__15968_SHARP_,p1__15969_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15974_15978 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15975_15979 = null;var count__15976_15980 = 0;var i__15977_15981 = 0;while(true){
if((i__15977_15981 < count__15976_15980))
{var n_15982 = cljs.core._nth.call(null,chunk__15975_15979,i__15977_15981);goog.style.setStyle(n_15982,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15983 = seq__15974_15978;
var G__15984 = chunk__15975_15979;
var G__15985 = count__15976_15980;
var G__15986 = (i__15977_15981 + 1);
seq__15974_15978 = G__15983;
chunk__15975_15979 = G__15984;
count__15976_15980 = G__15985;
i__15977_15981 = G__15986;
continue;
}
} else
{var temp__4092__auto___15987 = cljs.core.seq.call(null,seq__15974_15978);if(temp__4092__auto___15987)
{var seq__15974_15988__$1 = temp__4092__auto___15987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15974_15988__$1))
{var c__4148__auto___15989 = cljs.core.chunk_first.call(null,seq__15974_15988__$1);{
var G__15990 = cljs.core.chunk_rest.call(null,seq__15974_15988__$1);
var G__15991 = c__4148__auto___15989;
var G__15992 = cljs.core.count.call(null,c__4148__auto___15989);
var G__15993 = 0;
seq__15974_15978 = G__15990;
chunk__15975_15979 = G__15991;
count__15976_15980 = G__15992;
i__15977_15981 = G__15993;
continue;
}
} else
{var n_15994 = cljs.core.first.call(null,seq__15974_15988__$1);goog.style.setStyle(n_15994,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15995 = cljs.core.next.call(null,seq__15974_15988__$1);
var G__15996 = null;
var G__15997 = 0;
var G__15998 = 0;
seq__15974_15978 = G__15995;
chunk__15975_15979 = G__15996;
count__15976_15980 = G__15997;
i__15977_15981 = G__15998;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15999){
var content = cljs.core.first(arglist__15999);
arglist__15999 = cljs.core.next(arglist__15999);
var name = cljs.core.first(arglist__15999);
var value = cljs.core.rest(arglist__15999);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16004_16008 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16005_16009 = null;var count__16006_16010 = 0;var i__16007_16011 = 0;while(true){
if((i__16007_16011 < count__16006_16010))
{var n_16012 = cljs.core._nth.call(null,chunk__16005_16009,i__16007_16011);n_16012.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16013 = seq__16004_16008;
var G__16014 = chunk__16005_16009;
var G__16015 = count__16006_16010;
var G__16016 = (i__16007_16011 + 1);
seq__16004_16008 = G__16013;
chunk__16005_16009 = G__16014;
count__16006_16010 = G__16015;
i__16007_16011 = G__16016;
continue;
}
} else
{var temp__4092__auto___16017 = cljs.core.seq.call(null,seq__16004_16008);if(temp__4092__auto___16017)
{var seq__16004_16018__$1 = temp__4092__auto___16017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16004_16018__$1))
{var c__4148__auto___16019 = cljs.core.chunk_first.call(null,seq__16004_16018__$1);{
var G__16020 = cljs.core.chunk_rest.call(null,seq__16004_16018__$1);
var G__16021 = c__4148__auto___16019;
var G__16022 = cljs.core.count.call(null,c__4148__auto___16019);
var G__16023 = 0;
seq__16004_16008 = G__16020;
chunk__16005_16009 = G__16021;
count__16006_16010 = G__16022;
i__16007_16011 = G__16023;
continue;
}
} else
{var n_16024 = cljs.core.first.call(null,seq__16004_16018__$1);n_16024.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16025 = cljs.core.next.call(null,seq__16004_16018__$1);
var G__16026 = null;
var G__16027 = 0;
var G__16028 = 0;
seq__16004_16008 = G__16025;
chunk__16005_16009 = G__16026;
count__16006_16010 = G__16027;
i__16007_16011 = G__16028;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16029){
var content = cljs.core.first(arglist__16029);
arglist__16029 = cljs.core.next(arglist__16029);
var name = cljs.core.first(arglist__16029);
var value = cljs.core.rest(arglist__16029);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16034_16038 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16035_16039 = null;var count__16036_16040 = 0;var i__16037_16041 = 0;while(true){
if((i__16037_16041 < count__16036_16040))
{var n_16042 = cljs.core._nth.call(null,chunk__16035_16039,i__16037_16041);n_16042.removeAttribute(cljs.core.name.call(null,name));
{
var G__16043 = seq__16034_16038;
var G__16044 = chunk__16035_16039;
var G__16045 = count__16036_16040;
var G__16046 = (i__16037_16041 + 1);
seq__16034_16038 = G__16043;
chunk__16035_16039 = G__16044;
count__16036_16040 = G__16045;
i__16037_16041 = G__16046;
continue;
}
} else
{var temp__4092__auto___16047 = cljs.core.seq.call(null,seq__16034_16038);if(temp__4092__auto___16047)
{var seq__16034_16048__$1 = temp__4092__auto___16047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16034_16048__$1))
{var c__4148__auto___16049 = cljs.core.chunk_first.call(null,seq__16034_16048__$1);{
var G__16050 = cljs.core.chunk_rest.call(null,seq__16034_16048__$1);
var G__16051 = c__4148__auto___16049;
var G__16052 = cljs.core.count.call(null,c__4148__auto___16049);
var G__16053 = 0;
seq__16034_16038 = G__16050;
chunk__16035_16039 = G__16051;
count__16036_16040 = G__16052;
i__16037_16041 = G__16053;
continue;
}
} else
{var n_16054 = cljs.core.first.call(null,seq__16034_16048__$1);n_16054.removeAttribute(cljs.core.name.call(null,name));
{
var G__16055 = cljs.core.next.call(null,seq__16034_16048__$1);
var G__16056 = null;
var G__16057 = 0;
var G__16058 = 0;
seq__16034_16038 = G__16055;
chunk__16035_16039 = G__16056;
count__16036_16040 = G__16057;
i__16037_16041 = G__16058;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16060 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16060,0,null);var v = cljs.core.nth.call(null,vec__16060,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16061_SHARP_){var attr = attrs__$1.item(p1__16061_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16068_16074 = cljs.core.seq.call(null,styles);var chunk__16069_16075 = null;var count__16070_16076 = 0;var i__16071_16077 = 0;while(true){
if((i__16071_16077 < count__16070_16076))
{var vec__16072_16078 = cljs.core._nth.call(null,chunk__16069_16075,i__16071_16077);var name_16079 = cljs.core.nth.call(null,vec__16072_16078,0,null);var value_16080 = cljs.core.nth.call(null,vec__16072_16078,1,null);domina.set_style_BANG_.call(null,content,name_16079,value_16080);
{
var G__16081 = seq__16068_16074;
var G__16082 = chunk__16069_16075;
var G__16083 = count__16070_16076;
var G__16084 = (i__16071_16077 + 1);
seq__16068_16074 = G__16081;
chunk__16069_16075 = G__16082;
count__16070_16076 = G__16083;
i__16071_16077 = G__16084;
continue;
}
} else
{var temp__4092__auto___16085 = cljs.core.seq.call(null,seq__16068_16074);if(temp__4092__auto___16085)
{var seq__16068_16086__$1 = temp__4092__auto___16085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16068_16086__$1))
{var c__4148__auto___16087 = cljs.core.chunk_first.call(null,seq__16068_16086__$1);{
var G__16088 = cljs.core.chunk_rest.call(null,seq__16068_16086__$1);
var G__16089 = c__4148__auto___16087;
var G__16090 = cljs.core.count.call(null,c__4148__auto___16087);
var G__16091 = 0;
seq__16068_16074 = G__16088;
chunk__16069_16075 = G__16089;
count__16070_16076 = G__16090;
i__16071_16077 = G__16091;
continue;
}
} else
{var vec__16073_16092 = cljs.core.first.call(null,seq__16068_16086__$1);var name_16093 = cljs.core.nth.call(null,vec__16073_16092,0,null);var value_16094 = cljs.core.nth.call(null,vec__16073_16092,1,null);domina.set_style_BANG_.call(null,content,name_16093,value_16094);
{
var G__16095 = cljs.core.next.call(null,seq__16068_16086__$1);
var G__16096 = null;
var G__16097 = 0;
var G__16098 = 0;
seq__16068_16074 = G__16095;
chunk__16069_16075 = G__16096;
count__16070_16076 = G__16097;
i__16071_16077 = G__16098;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16105_16111 = cljs.core.seq.call(null,attrs);var chunk__16106_16112 = null;var count__16107_16113 = 0;var i__16108_16114 = 0;while(true){
if((i__16108_16114 < count__16107_16113))
{var vec__16109_16115 = cljs.core._nth.call(null,chunk__16106_16112,i__16108_16114);var name_16116 = cljs.core.nth.call(null,vec__16109_16115,0,null);var value_16117 = cljs.core.nth.call(null,vec__16109_16115,1,null);domina.set_attr_BANG_.call(null,content,name_16116,value_16117);
{
var G__16118 = seq__16105_16111;
var G__16119 = chunk__16106_16112;
var G__16120 = count__16107_16113;
var G__16121 = (i__16108_16114 + 1);
seq__16105_16111 = G__16118;
chunk__16106_16112 = G__16119;
count__16107_16113 = G__16120;
i__16108_16114 = G__16121;
continue;
}
} else
{var temp__4092__auto___16122 = cljs.core.seq.call(null,seq__16105_16111);if(temp__4092__auto___16122)
{var seq__16105_16123__$1 = temp__4092__auto___16122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16105_16123__$1))
{var c__4148__auto___16124 = cljs.core.chunk_first.call(null,seq__16105_16123__$1);{
var G__16125 = cljs.core.chunk_rest.call(null,seq__16105_16123__$1);
var G__16126 = c__4148__auto___16124;
var G__16127 = cljs.core.count.call(null,c__4148__auto___16124);
var G__16128 = 0;
seq__16105_16111 = G__16125;
chunk__16106_16112 = G__16126;
count__16107_16113 = G__16127;
i__16108_16114 = G__16128;
continue;
}
} else
{var vec__16110_16129 = cljs.core.first.call(null,seq__16105_16123__$1);var name_16130 = cljs.core.nth.call(null,vec__16110_16129,0,null);var value_16131 = cljs.core.nth.call(null,vec__16110_16129,1,null);domina.set_attr_BANG_.call(null,content,name_16130,value_16131);
{
var G__16132 = cljs.core.next.call(null,seq__16105_16123__$1);
var G__16133 = null;
var G__16134 = 0;
var G__16135 = 0;
seq__16105_16111 = G__16132;
chunk__16106_16112 = G__16133;
count__16107_16113 = G__16134;
i__16108_16114 = G__16135;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16140_16144 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16141_16145 = null;var count__16142_16146 = 0;var i__16143_16147 = 0;while(true){
if((i__16143_16147 < count__16142_16146))
{var node_16148 = cljs.core._nth.call(null,chunk__16141_16145,i__16143_16147);goog.dom.classes.add(node_16148,class$);
{
var G__16149 = seq__16140_16144;
var G__16150 = chunk__16141_16145;
var G__16151 = count__16142_16146;
var G__16152 = (i__16143_16147 + 1);
seq__16140_16144 = G__16149;
chunk__16141_16145 = G__16150;
count__16142_16146 = G__16151;
i__16143_16147 = G__16152;
continue;
}
} else
{var temp__4092__auto___16153 = cljs.core.seq.call(null,seq__16140_16144);if(temp__4092__auto___16153)
{var seq__16140_16154__$1 = temp__4092__auto___16153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16140_16154__$1))
{var c__4148__auto___16155 = cljs.core.chunk_first.call(null,seq__16140_16154__$1);{
var G__16156 = cljs.core.chunk_rest.call(null,seq__16140_16154__$1);
var G__16157 = c__4148__auto___16155;
var G__16158 = cljs.core.count.call(null,c__4148__auto___16155);
var G__16159 = 0;
seq__16140_16144 = G__16156;
chunk__16141_16145 = G__16157;
count__16142_16146 = G__16158;
i__16143_16147 = G__16159;
continue;
}
} else
{var node_16160 = cljs.core.first.call(null,seq__16140_16154__$1);goog.dom.classes.add(node_16160,class$);
{
var G__16161 = cljs.core.next.call(null,seq__16140_16154__$1);
var G__16162 = null;
var G__16163 = 0;
var G__16164 = 0;
seq__16140_16144 = G__16161;
chunk__16141_16145 = G__16162;
count__16142_16146 = G__16163;
i__16143_16147 = G__16164;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16169_16173 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16170_16174 = null;var count__16171_16175 = 0;var i__16172_16176 = 0;while(true){
if((i__16172_16176 < count__16171_16175))
{var node_16177 = cljs.core._nth.call(null,chunk__16170_16174,i__16172_16176);goog.dom.classes.remove(node_16177,class$);
{
var G__16178 = seq__16169_16173;
var G__16179 = chunk__16170_16174;
var G__16180 = count__16171_16175;
var G__16181 = (i__16172_16176 + 1);
seq__16169_16173 = G__16178;
chunk__16170_16174 = G__16179;
count__16171_16175 = G__16180;
i__16172_16176 = G__16181;
continue;
}
} else
{var temp__4092__auto___16182 = cljs.core.seq.call(null,seq__16169_16173);if(temp__4092__auto___16182)
{var seq__16169_16183__$1 = temp__4092__auto___16182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16169_16183__$1))
{var c__4148__auto___16184 = cljs.core.chunk_first.call(null,seq__16169_16183__$1);{
var G__16185 = cljs.core.chunk_rest.call(null,seq__16169_16183__$1);
var G__16186 = c__4148__auto___16184;
var G__16187 = cljs.core.count.call(null,c__4148__auto___16184);
var G__16188 = 0;
seq__16169_16173 = G__16185;
chunk__16170_16174 = G__16186;
count__16171_16175 = G__16187;
i__16172_16176 = G__16188;
continue;
}
} else
{var node_16189 = cljs.core.first.call(null,seq__16169_16183__$1);goog.dom.classes.remove(node_16189,class$);
{
var G__16190 = cljs.core.next.call(null,seq__16169_16183__$1);
var G__16191 = null;
var G__16192 = 0;
var G__16193 = 0;
seq__16169_16173 = G__16190;
chunk__16170_16174 = G__16191;
count__16171_16175 = G__16192;
i__16172_16176 = G__16193;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16198_16202 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16199_16203 = null;var count__16200_16204 = 0;var i__16201_16205 = 0;while(true){
if((i__16201_16205 < count__16200_16204))
{var node_16206 = cljs.core._nth.call(null,chunk__16199_16203,i__16201_16205);goog.dom.classes.toggle(node_16206,class$);
{
var G__16207 = seq__16198_16202;
var G__16208 = chunk__16199_16203;
var G__16209 = count__16200_16204;
var G__16210 = (i__16201_16205 + 1);
seq__16198_16202 = G__16207;
chunk__16199_16203 = G__16208;
count__16200_16204 = G__16209;
i__16201_16205 = G__16210;
continue;
}
} else
{var temp__4092__auto___16211 = cljs.core.seq.call(null,seq__16198_16202);if(temp__4092__auto___16211)
{var seq__16198_16212__$1 = temp__4092__auto___16211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16198_16212__$1))
{var c__4148__auto___16213 = cljs.core.chunk_first.call(null,seq__16198_16212__$1);{
var G__16214 = cljs.core.chunk_rest.call(null,seq__16198_16212__$1);
var G__16215 = c__4148__auto___16213;
var G__16216 = cljs.core.count.call(null,c__4148__auto___16213);
var G__16217 = 0;
seq__16198_16202 = G__16214;
chunk__16199_16203 = G__16215;
count__16200_16204 = G__16216;
i__16201_16205 = G__16217;
continue;
}
} else
{var node_16218 = cljs.core.first.call(null,seq__16198_16212__$1);goog.dom.classes.toggle(node_16218,class$);
{
var G__16219 = cljs.core.next.call(null,seq__16198_16212__$1);
var G__16220 = null;
var G__16221 = 0;
var G__16222 = 0;
seq__16198_16202 = G__16219;
chunk__16199_16203 = G__16220;
count__16200_16204 = G__16221;
i__16201_16205 = G__16222;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16231__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16227_16232 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16228_16233 = null;var count__16229_16234 = 0;var i__16230_16235 = 0;while(true){
if((i__16230_16235 < count__16229_16234))
{var node_16236 = cljs.core._nth.call(null,chunk__16228_16233,i__16230_16235);goog.dom.classes.set(node_16236,classes_16231__$1);
{
var G__16237 = seq__16227_16232;
var G__16238 = chunk__16228_16233;
var G__16239 = count__16229_16234;
var G__16240 = (i__16230_16235 + 1);
seq__16227_16232 = G__16237;
chunk__16228_16233 = G__16238;
count__16229_16234 = G__16239;
i__16230_16235 = G__16240;
continue;
}
} else
{var temp__4092__auto___16241 = cljs.core.seq.call(null,seq__16227_16232);if(temp__4092__auto___16241)
{var seq__16227_16242__$1 = temp__4092__auto___16241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16227_16242__$1))
{var c__4148__auto___16243 = cljs.core.chunk_first.call(null,seq__16227_16242__$1);{
var G__16244 = cljs.core.chunk_rest.call(null,seq__16227_16242__$1);
var G__16245 = c__4148__auto___16243;
var G__16246 = cljs.core.count.call(null,c__4148__auto___16243);
var G__16247 = 0;
seq__16227_16232 = G__16244;
chunk__16228_16233 = G__16245;
count__16229_16234 = G__16246;
i__16230_16235 = G__16247;
continue;
}
} else
{var node_16248 = cljs.core.first.call(null,seq__16227_16242__$1);goog.dom.classes.set(node_16248,classes_16231__$1);
{
var G__16249 = cljs.core.next.call(null,seq__16227_16242__$1);
var G__16250 = null;
var G__16251 = 0;
var G__16252 = 0;
seq__16227_16232 = G__16249;
chunk__16228_16233 = G__16250;
count__16229_16234 = G__16251;
i__16230_16235 = G__16252;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16257_16261 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16258_16262 = null;var count__16259_16263 = 0;var i__16260_16264 = 0;while(true){
if((i__16260_16264 < count__16259_16263))
{var node_16265 = cljs.core._nth.call(null,chunk__16258_16262,i__16260_16264);goog.dom.setTextContent(node_16265,value);
{
var G__16266 = seq__16257_16261;
var G__16267 = chunk__16258_16262;
var G__16268 = count__16259_16263;
var G__16269 = (i__16260_16264 + 1);
seq__16257_16261 = G__16266;
chunk__16258_16262 = G__16267;
count__16259_16263 = G__16268;
i__16260_16264 = G__16269;
continue;
}
} else
{var temp__4092__auto___16270 = cljs.core.seq.call(null,seq__16257_16261);if(temp__4092__auto___16270)
{var seq__16257_16271__$1 = temp__4092__auto___16270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16257_16271__$1))
{var c__4148__auto___16272 = cljs.core.chunk_first.call(null,seq__16257_16271__$1);{
var G__16273 = cljs.core.chunk_rest.call(null,seq__16257_16271__$1);
var G__16274 = c__4148__auto___16272;
var G__16275 = cljs.core.count.call(null,c__4148__auto___16272);
var G__16276 = 0;
seq__16257_16261 = G__16273;
chunk__16258_16262 = G__16274;
count__16259_16263 = G__16275;
i__16260_16264 = G__16276;
continue;
}
} else
{var node_16277 = cljs.core.first.call(null,seq__16257_16271__$1);goog.dom.setTextContent(node_16277,value);
{
var G__16278 = cljs.core.next.call(null,seq__16257_16271__$1);
var G__16279 = null;
var G__16280 = 0;
var G__16281 = 0;
seq__16257_16261 = G__16278;
chunk__16258_16262 = G__16279;
count__16259_16263 = G__16280;
i__16260_16264 = G__16281;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16286_16290 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16287_16291 = null;var count__16288_16292 = 0;var i__16289_16293 = 0;while(true){
if((i__16289_16293 < count__16288_16292))
{var node_16294 = cljs.core._nth.call(null,chunk__16287_16291,i__16289_16293);goog.dom.forms.setValue(node_16294,value);
{
var G__16295 = seq__16286_16290;
var G__16296 = chunk__16287_16291;
var G__16297 = count__16288_16292;
var G__16298 = (i__16289_16293 + 1);
seq__16286_16290 = G__16295;
chunk__16287_16291 = G__16296;
count__16288_16292 = G__16297;
i__16289_16293 = G__16298;
continue;
}
} else
{var temp__4092__auto___16299 = cljs.core.seq.call(null,seq__16286_16290);if(temp__4092__auto___16299)
{var seq__16286_16300__$1 = temp__4092__auto___16299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16286_16300__$1))
{var c__4148__auto___16301 = cljs.core.chunk_first.call(null,seq__16286_16300__$1);{
var G__16302 = cljs.core.chunk_rest.call(null,seq__16286_16300__$1);
var G__16303 = c__4148__auto___16301;
var G__16304 = cljs.core.count.call(null,c__4148__auto___16301);
var G__16305 = 0;
seq__16286_16290 = G__16302;
chunk__16287_16291 = G__16303;
count__16288_16292 = G__16304;
i__16289_16293 = G__16305;
continue;
}
} else
{var node_16306 = cljs.core.first.call(null,seq__16286_16300__$1);goog.dom.forms.setValue(node_16306,value);
{
var G__16307 = cljs.core.next.call(null,seq__16286_16300__$1);
var G__16308 = null;
var G__16309 = 0;
var G__16310 = 0;
seq__16286_16290 = G__16307;
chunk__16287_16291 = G__16308;
count__16288_16292 = G__16309;
i__16289_16293 = G__16310;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_16321 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16317_16322 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16318_16323 = null;var count__16319_16324 = 0;var i__16320_16325 = 0;while(true){
if((i__16320_16325 < count__16319_16324))
{var node_16326 = cljs.core._nth.call(null,chunk__16318_16323,i__16320_16325);node_16326.innerHTML = value_16321;
{
var G__16327 = seq__16317_16322;
var G__16328 = chunk__16318_16323;
var G__16329 = count__16319_16324;
var G__16330 = (i__16320_16325 + 1);
seq__16317_16322 = G__16327;
chunk__16318_16323 = G__16328;
count__16319_16324 = G__16329;
i__16320_16325 = G__16330;
continue;
}
} else
{var temp__4092__auto___16331 = cljs.core.seq.call(null,seq__16317_16322);if(temp__4092__auto___16331)
{var seq__16317_16332__$1 = temp__4092__auto___16331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16317_16332__$1))
{var c__4148__auto___16333 = cljs.core.chunk_first.call(null,seq__16317_16332__$1);{
var G__16334 = cljs.core.chunk_rest.call(null,seq__16317_16332__$1);
var G__16335 = c__4148__auto___16333;
var G__16336 = cljs.core.count.call(null,c__4148__auto___16333);
var G__16337 = 0;
seq__16317_16322 = G__16334;
chunk__16318_16323 = G__16335;
count__16319_16324 = G__16336;
i__16320_16325 = G__16337;
continue;
}
} else
{var node_16338 = cljs.core.first.call(null,seq__16317_16332__$1);node_16338.innerHTML = value_16321;
{
var G__16339 = cljs.core.next.call(null,seq__16317_16332__$1);
var G__16340 = null;
var G__16341 = 0;
var G__16342 = 0;
seq__16317_16322 = G__16339;
chunk__16318_16323 = G__16340;
count__16319_16324 = G__16341;
i__16320_16325 = G__16342;
continue;
}
}
} else
{}
}
break;
}
}catch (e16316){if((e16316 instanceof Error))
{var e_16343 = e16316;domina.replace_children_BANG_.call(null,content,value_16321);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16316;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16350_16354 = cljs.core.seq.call(null,children);var chunk__16351_16355 = null;var count__16352_16356 = 0;var i__16353_16357 = 0;while(true){
if((i__16353_16357 < count__16352_16356))
{var child_16358 = cljs.core._nth.call(null,chunk__16351_16355,i__16353_16357);frag.appendChild(child_16358);
{
var G__16359 = seq__16350_16354;
var G__16360 = chunk__16351_16355;
var G__16361 = count__16352_16356;
var G__16362 = (i__16353_16357 + 1);
seq__16350_16354 = G__16359;
chunk__16351_16355 = G__16360;
count__16352_16356 = G__16361;
i__16353_16357 = G__16362;
continue;
}
} else
{var temp__4092__auto___16363 = cljs.core.seq.call(null,seq__16350_16354);if(temp__4092__auto___16363)
{var seq__16350_16364__$1 = temp__4092__auto___16363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16350_16364__$1))
{var c__4148__auto___16365 = cljs.core.chunk_first.call(null,seq__16350_16364__$1);{
var G__16366 = cljs.core.chunk_rest.call(null,seq__16350_16364__$1);
var G__16367 = c__4148__auto___16365;
var G__16368 = cljs.core.count.call(null,c__4148__auto___16365);
var G__16369 = 0;
seq__16350_16354 = G__16366;
chunk__16351_16355 = G__16367;
count__16352_16356 = G__16368;
i__16353_16357 = G__16369;
continue;
}
} else
{var child_16370 = cljs.core.first.call(null,seq__16350_16364__$1);frag.appendChild(child_16370);
{
var G__16371 = cljs.core.next.call(null,seq__16350_16364__$1);
var G__16372 = null;
var G__16373 = 0;
var G__16374 = 0;
seq__16350_16354 = G__16371;
chunk__16351_16355 = G__16372;
count__16352_16356 = G__16373;
i__16353_16357 = G__16374;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16344_SHARP_,p2__16345_SHARP_){return f.call(null,p1__16344_SHARP_,p2__16345_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__16376 = list_thing;if(G__16376)
{var bit__4050__auto__ = (G__16376.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16376.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16376.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16376);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16376);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__16377 = content;if(G__16377)
{var bit__4050__auto__ = (G__16377.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16377.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16377.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16377);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16377);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__16378 = content;if(G__16378)
{var bit__4050__auto__ = (G__16378.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16378.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16378.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16378);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16378);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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

//# sourceMappingURL=domina.js.map