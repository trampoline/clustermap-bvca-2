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
var opt_wrapper_14968 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14969 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14970 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14969,table_section_wrapper_14969,opt_wrapper_14968,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14970,table_section_wrapper_14969,cell_wrapper_14970,opt_wrapper_14968,table_section_wrapper_14969,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14969]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14975 = cljs.core.seq.call(null,tbody);var chunk__14976 = null;var count__14977 = 0;var i__14978 = 0;while(true){
if((i__14978 < count__14977))
{var child = cljs.core._nth.call(null,chunk__14976,i__14978);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14979 = seq__14975;
var G__14980 = chunk__14976;
var G__14981 = count__14977;
var G__14982 = (i__14978 + 1);
seq__14975 = G__14979;
chunk__14976 = G__14980;
count__14977 = G__14981;
i__14978 = G__14982;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14975);if(temp__4092__auto__)
{var seq__14975__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14975__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14975__$1);{
var G__14983 = cljs.core.chunk_rest.call(null,seq__14975__$1);
var G__14984 = c__4148__auto__;
var G__14985 = cljs.core.count.call(null,c__4148__auto__);
var G__14986 = 0;
seq__14975 = G__14983;
chunk__14976 = G__14984;
count__14977 = G__14985;
i__14978 = G__14986;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14975__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14987 = cljs.core.next.call(null,seq__14975__$1);
var G__14988 = null;
var G__14989 = 0;
var G__14990 = 0;
seq__14975 = G__14987;
chunk__14976 = G__14988;
count__14977 = G__14989;
i__14978 = G__14990;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__14992 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__14992,0,null);var start_wrap = cljs.core.nth.call(null,vec__14992,1,null);var end_wrap = cljs.core.nth.call(null,vec__14992,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__14993 = wrapper.lastChild;
var G__14994 = (level - 1);
wrapper = G__14993;
level = G__14994;
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
domina.DomContent = (function (){var obj14996 = {};return obj14996;
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
log_debug.cljs$lang$applyTo = (function (arglist__14997){
var mesg = cljs.core.seq(arglist__14997);
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
log.cljs$lang$applyTo = (function (arglist__14998){
var mesg = cljs.core.seq(arglist__14998);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__14999){
var contents = cljs.core.seq(arglist__14999);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15000_SHARP_){return p1__15000_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15001_SHARP_,p2__15002_SHARP_){return goog.dom.insertChildAt(p1__15001_SHARP_,p2__15002_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15004_SHARP_,p2__15003_SHARP_){return goog.dom.insertSiblingBefore(p2__15003_SHARP_,p1__15004_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15006_SHARP_,p2__15005_SHARP_){return goog.dom.insertSiblingAfter(p2__15005_SHARP_,p1__15006_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15008_SHARP_,p2__15007_SHARP_){return goog.dom.replaceNode(p2__15007_SHARP_,p1__15008_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15013_15017 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15014_15018 = null;var count__15015_15019 = 0;var i__15016_15020 = 0;while(true){
if((i__15016_15020 < count__15015_15019))
{var n_15021 = cljs.core._nth.call(null,chunk__15014_15018,i__15016_15020);goog.style.setStyle(n_15021,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15022 = seq__15013_15017;
var G__15023 = chunk__15014_15018;
var G__15024 = count__15015_15019;
var G__15025 = (i__15016_15020 + 1);
seq__15013_15017 = G__15022;
chunk__15014_15018 = G__15023;
count__15015_15019 = G__15024;
i__15016_15020 = G__15025;
continue;
}
} else
{var temp__4092__auto___15026 = cljs.core.seq.call(null,seq__15013_15017);if(temp__4092__auto___15026)
{var seq__15013_15027__$1 = temp__4092__auto___15026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15013_15027__$1))
{var c__4148__auto___15028 = cljs.core.chunk_first.call(null,seq__15013_15027__$1);{
var G__15029 = cljs.core.chunk_rest.call(null,seq__15013_15027__$1);
var G__15030 = c__4148__auto___15028;
var G__15031 = cljs.core.count.call(null,c__4148__auto___15028);
var G__15032 = 0;
seq__15013_15017 = G__15029;
chunk__15014_15018 = G__15030;
count__15015_15019 = G__15031;
i__15016_15020 = G__15032;
continue;
}
} else
{var n_15033 = cljs.core.first.call(null,seq__15013_15027__$1);goog.style.setStyle(n_15033,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15034 = cljs.core.next.call(null,seq__15013_15027__$1);
var G__15035 = null;
var G__15036 = 0;
var G__15037 = 0;
seq__15013_15017 = G__15034;
chunk__15014_15018 = G__15035;
count__15015_15019 = G__15036;
i__15016_15020 = G__15037;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15038){
var content = cljs.core.first(arglist__15038);
arglist__15038 = cljs.core.next(arglist__15038);
var name = cljs.core.first(arglist__15038);
var value = cljs.core.rest(arglist__15038);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15043_15047 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15044_15048 = null;var count__15045_15049 = 0;var i__15046_15050 = 0;while(true){
if((i__15046_15050 < count__15045_15049))
{var n_15051 = cljs.core._nth.call(null,chunk__15044_15048,i__15046_15050);n_15051.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15052 = seq__15043_15047;
var G__15053 = chunk__15044_15048;
var G__15054 = count__15045_15049;
var G__15055 = (i__15046_15050 + 1);
seq__15043_15047 = G__15052;
chunk__15044_15048 = G__15053;
count__15045_15049 = G__15054;
i__15046_15050 = G__15055;
continue;
}
} else
{var temp__4092__auto___15056 = cljs.core.seq.call(null,seq__15043_15047);if(temp__4092__auto___15056)
{var seq__15043_15057__$1 = temp__4092__auto___15056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15043_15057__$1))
{var c__4148__auto___15058 = cljs.core.chunk_first.call(null,seq__15043_15057__$1);{
var G__15059 = cljs.core.chunk_rest.call(null,seq__15043_15057__$1);
var G__15060 = c__4148__auto___15058;
var G__15061 = cljs.core.count.call(null,c__4148__auto___15058);
var G__15062 = 0;
seq__15043_15047 = G__15059;
chunk__15044_15048 = G__15060;
count__15045_15049 = G__15061;
i__15046_15050 = G__15062;
continue;
}
} else
{var n_15063 = cljs.core.first.call(null,seq__15043_15057__$1);n_15063.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15064 = cljs.core.next.call(null,seq__15043_15057__$1);
var G__15065 = null;
var G__15066 = 0;
var G__15067 = 0;
seq__15043_15047 = G__15064;
chunk__15044_15048 = G__15065;
count__15045_15049 = G__15066;
i__15046_15050 = G__15067;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15068){
var content = cljs.core.first(arglist__15068);
arglist__15068 = cljs.core.next(arglist__15068);
var name = cljs.core.first(arglist__15068);
var value = cljs.core.rest(arglist__15068);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15073_15077 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15074_15078 = null;var count__15075_15079 = 0;var i__15076_15080 = 0;while(true){
if((i__15076_15080 < count__15075_15079))
{var n_15081 = cljs.core._nth.call(null,chunk__15074_15078,i__15076_15080);n_15081.removeAttribute(cljs.core.name.call(null,name));
{
var G__15082 = seq__15073_15077;
var G__15083 = chunk__15074_15078;
var G__15084 = count__15075_15079;
var G__15085 = (i__15076_15080 + 1);
seq__15073_15077 = G__15082;
chunk__15074_15078 = G__15083;
count__15075_15079 = G__15084;
i__15076_15080 = G__15085;
continue;
}
} else
{var temp__4092__auto___15086 = cljs.core.seq.call(null,seq__15073_15077);if(temp__4092__auto___15086)
{var seq__15073_15087__$1 = temp__4092__auto___15086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15073_15087__$1))
{var c__4148__auto___15088 = cljs.core.chunk_first.call(null,seq__15073_15087__$1);{
var G__15089 = cljs.core.chunk_rest.call(null,seq__15073_15087__$1);
var G__15090 = c__4148__auto___15088;
var G__15091 = cljs.core.count.call(null,c__4148__auto___15088);
var G__15092 = 0;
seq__15073_15077 = G__15089;
chunk__15074_15078 = G__15090;
count__15075_15079 = G__15091;
i__15076_15080 = G__15092;
continue;
}
} else
{var n_15093 = cljs.core.first.call(null,seq__15073_15087__$1);n_15093.removeAttribute(cljs.core.name.call(null,name));
{
var G__15094 = cljs.core.next.call(null,seq__15073_15087__$1);
var G__15095 = null;
var G__15096 = 0;
var G__15097 = 0;
seq__15073_15077 = G__15094;
chunk__15074_15078 = G__15095;
count__15075_15079 = G__15096;
i__15076_15080 = G__15097;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15099 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15099,0,null);var v = cljs.core.nth.call(null,vec__15099,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15100_SHARP_){var attr = attrs__$1.item(p1__15100_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15107_15113 = cljs.core.seq.call(null,styles);var chunk__15108_15114 = null;var count__15109_15115 = 0;var i__15110_15116 = 0;while(true){
if((i__15110_15116 < count__15109_15115))
{var vec__15111_15117 = cljs.core._nth.call(null,chunk__15108_15114,i__15110_15116);var name_15118 = cljs.core.nth.call(null,vec__15111_15117,0,null);var value_15119 = cljs.core.nth.call(null,vec__15111_15117,1,null);domina.set_style_BANG_.call(null,content,name_15118,value_15119);
{
var G__15120 = seq__15107_15113;
var G__15121 = chunk__15108_15114;
var G__15122 = count__15109_15115;
var G__15123 = (i__15110_15116 + 1);
seq__15107_15113 = G__15120;
chunk__15108_15114 = G__15121;
count__15109_15115 = G__15122;
i__15110_15116 = G__15123;
continue;
}
} else
{var temp__4092__auto___15124 = cljs.core.seq.call(null,seq__15107_15113);if(temp__4092__auto___15124)
{var seq__15107_15125__$1 = temp__4092__auto___15124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15107_15125__$1))
{var c__4148__auto___15126 = cljs.core.chunk_first.call(null,seq__15107_15125__$1);{
var G__15127 = cljs.core.chunk_rest.call(null,seq__15107_15125__$1);
var G__15128 = c__4148__auto___15126;
var G__15129 = cljs.core.count.call(null,c__4148__auto___15126);
var G__15130 = 0;
seq__15107_15113 = G__15127;
chunk__15108_15114 = G__15128;
count__15109_15115 = G__15129;
i__15110_15116 = G__15130;
continue;
}
} else
{var vec__15112_15131 = cljs.core.first.call(null,seq__15107_15125__$1);var name_15132 = cljs.core.nth.call(null,vec__15112_15131,0,null);var value_15133 = cljs.core.nth.call(null,vec__15112_15131,1,null);domina.set_style_BANG_.call(null,content,name_15132,value_15133);
{
var G__15134 = cljs.core.next.call(null,seq__15107_15125__$1);
var G__15135 = null;
var G__15136 = 0;
var G__15137 = 0;
seq__15107_15113 = G__15134;
chunk__15108_15114 = G__15135;
count__15109_15115 = G__15136;
i__15110_15116 = G__15137;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15144_15150 = cljs.core.seq.call(null,attrs);var chunk__15145_15151 = null;var count__15146_15152 = 0;var i__15147_15153 = 0;while(true){
if((i__15147_15153 < count__15146_15152))
{var vec__15148_15154 = cljs.core._nth.call(null,chunk__15145_15151,i__15147_15153);var name_15155 = cljs.core.nth.call(null,vec__15148_15154,0,null);var value_15156 = cljs.core.nth.call(null,vec__15148_15154,1,null);domina.set_attr_BANG_.call(null,content,name_15155,value_15156);
{
var G__15157 = seq__15144_15150;
var G__15158 = chunk__15145_15151;
var G__15159 = count__15146_15152;
var G__15160 = (i__15147_15153 + 1);
seq__15144_15150 = G__15157;
chunk__15145_15151 = G__15158;
count__15146_15152 = G__15159;
i__15147_15153 = G__15160;
continue;
}
} else
{var temp__4092__auto___15161 = cljs.core.seq.call(null,seq__15144_15150);if(temp__4092__auto___15161)
{var seq__15144_15162__$1 = temp__4092__auto___15161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15144_15162__$1))
{var c__4148__auto___15163 = cljs.core.chunk_first.call(null,seq__15144_15162__$1);{
var G__15164 = cljs.core.chunk_rest.call(null,seq__15144_15162__$1);
var G__15165 = c__4148__auto___15163;
var G__15166 = cljs.core.count.call(null,c__4148__auto___15163);
var G__15167 = 0;
seq__15144_15150 = G__15164;
chunk__15145_15151 = G__15165;
count__15146_15152 = G__15166;
i__15147_15153 = G__15167;
continue;
}
} else
{var vec__15149_15168 = cljs.core.first.call(null,seq__15144_15162__$1);var name_15169 = cljs.core.nth.call(null,vec__15149_15168,0,null);var value_15170 = cljs.core.nth.call(null,vec__15149_15168,1,null);domina.set_attr_BANG_.call(null,content,name_15169,value_15170);
{
var G__15171 = cljs.core.next.call(null,seq__15144_15162__$1);
var G__15172 = null;
var G__15173 = 0;
var G__15174 = 0;
seq__15144_15150 = G__15171;
chunk__15145_15151 = G__15172;
count__15146_15152 = G__15173;
i__15147_15153 = G__15174;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15179_15183 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15180_15184 = null;var count__15181_15185 = 0;var i__15182_15186 = 0;while(true){
if((i__15182_15186 < count__15181_15185))
{var node_15187 = cljs.core._nth.call(null,chunk__15180_15184,i__15182_15186);goog.dom.classes.add(node_15187,class$);
{
var G__15188 = seq__15179_15183;
var G__15189 = chunk__15180_15184;
var G__15190 = count__15181_15185;
var G__15191 = (i__15182_15186 + 1);
seq__15179_15183 = G__15188;
chunk__15180_15184 = G__15189;
count__15181_15185 = G__15190;
i__15182_15186 = G__15191;
continue;
}
} else
{var temp__4092__auto___15192 = cljs.core.seq.call(null,seq__15179_15183);if(temp__4092__auto___15192)
{var seq__15179_15193__$1 = temp__4092__auto___15192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15179_15193__$1))
{var c__4148__auto___15194 = cljs.core.chunk_first.call(null,seq__15179_15193__$1);{
var G__15195 = cljs.core.chunk_rest.call(null,seq__15179_15193__$1);
var G__15196 = c__4148__auto___15194;
var G__15197 = cljs.core.count.call(null,c__4148__auto___15194);
var G__15198 = 0;
seq__15179_15183 = G__15195;
chunk__15180_15184 = G__15196;
count__15181_15185 = G__15197;
i__15182_15186 = G__15198;
continue;
}
} else
{var node_15199 = cljs.core.first.call(null,seq__15179_15193__$1);goog.dom.classes.add(node_15199,class$);
{
var G__15200 = cljs.core.next.call(null,seq__15179_15193__$1);
var G__15201 = null;
var G__15202 = 0;
var G__15203 = 0;
seq__15179_15183 = G__15200;
chunk__15180_15184 = G__15201;
count__15181_15185 = G__15202;
i__15182_15186 = G__15203;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15208_15212 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15209_15213 = null;var count__15210_15214 = 0;var i__15211_15215 = 0;while(true){
if((i__15211_15215 < count__15210_15214))
{var node_15216 = cljs.core._nth.call(null,chunk__15209_15213,i__15211_15215);goog.dom.classes.remove(node_15216,class$);
{
var G__15217 = seq__15208_15212;
var G__15218 = chunk__15209_15213;
var G__15219 = count__15210_15214;
var G__15220 = (i__15211_15215 + 1);
seq__15208_15212 = G__15217;
chunk__15209_15213 = G__15218;
count__15210_15214 = G__15219;
i__15211_15215 = G__15220;
continue;
}
} else
{var temp__4092__auto___15221 = cljs.core.seq.call(null,seq__15208_15212);if(temp__4092__auto___15221)
{var seq__15208_15222__$1 = temp__4092__auto___15221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15208_15222__$1))
{var c__4148__auto___15223 = cljs.core.chunk_first.call(null,seq__15208_15222__$1);{
var G__15224 = cljs.core.chunk_rest.call(null,seq__15208_15222__$1);
var G__15225 = c__4148__auto___15223;
var G__15226 = cljs.core.count.call(null,c__4148__auto___15223);
var G__15227 = 0;
seq__15208_15212 = G__15224;
chunk__15209_15213 = G__15225;
count__15210_15214 = G__15226;
i__15211_15215 = G__15227;
continue;
}
} else
{var node_15228 = cljs.core.first.call(null,seq__15208_15222__$1);goog.dom.classes.remove(node_15228,class$);
{
var G__15229 = cljs.core.next.call(null,seq__15208_15222__$1);
var G__15230 = null;
var G__15231 = 0;
var G__15232 = 0;
seq__15208_15212 = G__15229;
chunk__15209_15213 = G__15230;
count__15210_15214 = G__15231;
i__15211_15215 = G__15232;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15237_15241 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15238_15242 = null;var count__15239_15243 = 0;var i__15240_15244 = 0;while(true){
if((i__15240_15244 < count__15239_15243))
{var node_15245 = cljs.core._nth.call(null,chunk__15238_15242,i__15240_15244);goog.dom.classes.toggle(node_15245,class$);
{
var G__15246 = seq__15237_15241;
var G__15247 = chunk__15238_15242;
var G__15248 = count__15239_15243;
var G__15249 = (i__15240_15244 + 1);
seq__15237_15241 = G__15246;
chunk__15238_15242 = G__15247;
count__15239_15243 = G__15248;
i__15240_15244 = G__15249;
continue;
}
} else
{var temp__4092__auto___15250 = cljs.core.seq.call(null,seq__15237_15241);if(temp__4092__auto___15250)
{var seq__15237_15251__$1 = temp__4092__auto___15250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15237_15251__$1))
{var c__4148__auto___15252 = cljs.core.chunk_first.call(null,seq__15237_15251__$1);{
var G__15253 = cljs.core.chunk_rest.call(null,seq__15237_15251__$1);
var G__15254 = c__4148__auto___15252;
var G__15255 = cljs.core.count.call(null,c__4148__auto___15252);
var G__15256 = 0;
seq__15237_15241 = G__15253;
chunk__15238_15242 = G__15254;
count__15239_15243 = G__15255;
i__15240_15244 = G__15256;
continue;
}
} else
{var node_15257 = cljs.core.first.call(null,seq__15237_15251__$1);goog.dom.classes.toggle(node_15257,class$);
{
var G__15258 = cljs.core.next.call(null,seq__15237_15251__$1);
var G__15259 = null;
var G__15260 = 0;
var G__15261 = 0;
seq__15237_15241 = G__15258;
chunk__15238_15242 = G__15259;
count__15239_15243 = G__15260;
i__15240_15244 = G__15261;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15270__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15266_15271 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15267_15272 = null;var count__15268_15273 = 0;var i__15269_15274 = 0;while(true){
if((i__15269_15274 < count__15268_15273))
{var node_15275 = cljs.core._nth.call(null,chunk__15267_15272,i__15269_15274);goog.dom.classes.set(node_15275,classes_15270__$1);
{
var G__15276 = seq__15266_15271;
var G__15277 = chunk__15267_15272;
var G__15278 = count__15268_15273;
var G__15279 = (i__15269_15274 + 1);
seq__15266_15271 = G__15276;
chunk__15267_15272 = G__15277;
count__15268_15273 = G__15278;
i__15269_15274 = G__15279;
continue;
}
} else
{var temp__4092__auto___15280 = cljs.core.seq.call(null,seq__15266_15271);if(temp__4092__auto___15280)
{var seq__15266_15281__$1 = temp__4092__auto___15280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15266_15281__$1))
{var c__4148__auto___15282 = cljs.core.chunk_first.call(null,seq__15266_15281__$1);{
var G__15283 = cljs.core.chunk_rest.call(null,seq__15266_15281__$1);
var G__15284 = c__4148__auto___15282;
var G__15285 = cljs.core.count.call(null,c__4148__auto___15282);
var G__15286 = 0;
seq__15266_15271 = G__15283;
chunk__15267_15272 = G__15284;
count__15268_15273 = G__15285;
i__15269_15274 = G__15286;
continue;
}
} else
{var node_15287 = cljs.core.first.call(null,seq__15266_15281__$1);goog.dom.classes.set(node_15287,classes_15270__$1);
{
var G__15288 = cljs.core.next.call(null,seq__15266_15281__$1);
var G__15289 = null;
var G__15290 = 0;
var G__15291 = 0;
seq__15266_15271 = G__15288;
chunk__15267_15272 = G__15289;
count__15268_15273 = G__15290;
i__15269_15274 = G__15291;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15296_15300 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15297_15301 = null;var count__15298_15302 = 0;var i__15299_15303 = 0;while(true){
if((i__15299_15303 < count__15298_15302))
{var node_15304 = cljs.core._nth.call(null,chunk__15297_15301,i__15299_15303);goog.dom.setTextContent(node_15304,value);
{
var G__15305 = seq__15296_15300;
var G__15306 = chunk__15297_15301;
var G__15307 = count__15298_15302;
var G__15308 = (i__15299_15303 + 1);
seq__15296_15300 = G__15305;
chunk__15297_15301 = G__15306;
count__15298_15302 = G__15307;
i__15299_15303 = G__15308;
continue;
}
} else
{var temp__4092__auto___15309 = cljs.core.seq.call(null,seq__15296_15300);if(temp__4092__auto___15309)
{var seq__15296_15310__$1 = temp__4092__auto___15309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15296_15310__$1))
{var c__4148__auto___15311 = cljs.core.chunk_first.call(null,seq__15296_15310__$1);{
var G__15312 = cljs.core.chunk_rest.call(null,seq__15296_15310__$1);
var G__15313 = c__4148__auto___15311;
var G__15314 = cljs.core.count.call(null,c__4148__auto___15311);
var G__15315 = 0;
seq__15296_15300 = G__15312;
chunk__15297_15301 = G__15313;
count__15298_15302 = G__15314;
i__15299_15303 = G__15315;
continue;
}
} else
{var node_15316 = cljs.core.first.call(null,seq__15296_15310__$1);goog.dom.setTextContent(node_15316,value);
{
var G__15317 = cljs.core.next.call(null,seq__15296_15310__$1);
var G__15318 = null;
var G__15319 = 0;
var G__15320 = 0;
seq__15296_15300 = G__15317;
chunk__15297_15301 = G__15318;
count__15298_15302 = G__15319;
i__15299_15303 = G__15320;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15325_15329 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15326_15330 = null;var count__15327_15331 = 0;var i__15328_15332 = 0;while(true){
if((i__15328_15332 < count__15327_15331))
{var node_15333 = cljs.core._nth.call(null,chunk__15326_15330,i__15328_15332);goog.dom.forms.setValue(node_15333,value);
{
var G__15334 = seq__15325_15329;
var G__15335 = chunk__15326_15330;
var G__15336 = count__15327_15331;
var G__15337 = (i__15328_15332 + 1);
seq__15325_15329 = G__15334;
chunk__15326_15330 = G__15335;
count__15327_15331 = G__15336;
i__15328_15332 = G__15337;
continue;
}
} else
{var temp__4092__auto___15338 = cljs.core.seq.call(null,seq__15325_15329);if(temp__4092__auto___15338)
{var seq__15325_15339__$1 = temp__4092__auto___15338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15325_15339__$1))
{var c__4148__auto___15340 = cljs.core.chunk_first.call(null,seq__15325_15339__$1);{
var G__15341 = cljs.core.chunk_rest.call(null,seq__15325_15339__$1);
var G__15342 = c__4148__auto___15340;
var G__15343 = cljs.core.count.call(null,c__4148__auto___15340);
var G__15344 = 0;
seq__15325_15329 = G__15341;
chunk__15326_15330 = G__15342;
count__15327_15331 = G__15343;
i__15328_15332 = G__15344;
continue;
}
} else
{var node_15345 = cljs.core.first.call(null,seq__15325_15339__$1);goog.dom.forms.setValue(node_15345,value);
{
var G__15346 = cljs.core.next.call(null,seq__15325_15339__$1);
var G__15347 = null;
var G__15348 = 0;
var G__15349 = 0;
seq__15325_15329 = G__15346;
chunk__15326_15330 = G__15347;
count__15327_15331 = G__15348;
i__15328_15332 = G__15349;
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
{var value_15360 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15356_15361 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15357_15362 = null;var count__15358_15363 = 0;var i__15359_15364 = 0;while(true){
if((i__15359_15364 < count__15358_15363))
{var node_15365 = cljs.core._nth.call(null,chunk__15357_15362,i__15359_15364);node_15365.innerHTML = value_15360;
{
var G__15366 = seq__15356_15361;
var G__15367 = chunk__15357_15362;
var G__15368 = count__15358_15363;
var G__15369 = (i__15359_15364 + 1);
seq__15356_15361 = G__15366;
chunk__15357_15362 = G__15367;
count__15358_15363 = G__15368;
i__15359_15364 = G__15369;
continue;
}
} else
{var temp__4092__auto___15370 = cljs.core.seq.call(null,seq__15356_15361);if(temp__4092__auto___15370)
{var seq__15356_15371__$1 = temp__4092__auto___15370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15356_15371__$1))
{var c__4148__auto___15372 = cljs.core.chunk_first.call(null,seq__15356_15371__$1);{
var G__15373 = cljs.core.chunk_rest.call(null,seq__15356_15371__$1);
var G__15374 = c__4148__auto___15372;
var G__15375 = cljs.core.count.call(null,c__4148__auto___15372);
var G__15376 = 0;
seq__15356_15361 = G__15373;
chunk__15357_15362 = G__15374;
count__15358_15363 = G__15375;
i__15359_15364 = G__15376;
continue;
}
} else
{var node_15377 = cljs.core.first.call(null,seq__15356_15371__$1);node_15377.innerHTML = value_15360;
{
var G__15378 = cljs.core.next.call(null,seq__15356_15371__$1);
var G__15379 = null;
var G__15380 = 0;
var G__15381 = 0;
seq__15356_15361 = G__15378;
chunk__15357_15362 = G__15379;
count__15358_15363 = G__15380;
i__15359_15364 = G__15381;
continue;
}
}
} else
{}
}
break;
}
}catch (e15355){if((e15355 instanceof Error))
{var e_15382 = e15355;domina.replace_children_BANG_.call(null,content,value_15360);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15355;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15389_15393 = cljs.core.seq.call(null,children);var chunk__15390_15394 = null;var count__15391_15395 = 0;var i__15392_15396 = 0;while(true){
if((i__15392_15396 < count__15391_15395))
{var child_15397 = cljs.core._nth.call(null,chunk__15390_15394,i__15392_15396);frag.appendChild(child_15397);
{
var G__15398 = seq__15389_15393;
var G__15399 = chunk__15390_15394;
var G__15400 = count__15391_15395;
var G__15401 = (i__15392_15396 + 1);
seq__15389_15393 = G__15398;
chunk__15390_15394 = G__15399;
count__15391_15395 = G__15400;
i__15392_15396 = G__15401;
continue;
}
} else
{var temp__4092__auto___15402 = cljs.core.seq.call(null,seq__15389_15393);if(temp__4092__auto___15402)
{var seq__15389_15403__$1 = temp__4092__auto___15402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15389_15403__$1))
{var c__4148__auto___15404 = cljs.core.chunk_first.call(null,seq__15389_15403__$1);{
var G__15405 = cljs.core.chunk_rest.call(null,seq__15389_15403__$1);
var G__15406 = c__4148__auto___15404;
var G__15407 = cljs.core.count.call(null,c__4148__auto___15404);
var G__15408 = 0;
seq__15389_15393 = G__15405;
chunk__15390_15394 = G__15406;
count__15391_15395 = G__15407;
i__15392_15396 = G__15408;
continue;
}
} else
{var child_15409 = cljs.core.first.call(null,seq__15389_15403__$1);frag.appendChild(child_15409);
{
var G__15410 = cljs.core.next.call(null,seq__15389_15403__$1);
var G__15411 = null;
var G__15412 = 0;
var G__15413 = 0;
seq__15389_15393 = G__15410;
chunk__15390_15394 = G__15411;
count__15391_15395 = G__15412;
i__15392_15396 = G__15413;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15383_SHARP_,p2__15384_SHARP_){return f.call(null,p1__15383_SHARP_,p2__15384_SHARP_);
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
{if((function (){var G__15415 = list_thing;if(G__15415)
{var bit__4050__auto__ = (G__15415.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15415.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15415.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15415);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15415);
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
{if((function (){var G__15416 = content;if(G__15416)
{var bit__4050__auto__ = (G__15416.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15416.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15416);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15416);
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
{if((function (){var G__15417 = content;if(G__15417)
{var bit__4050__auto__ = (G__15417.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15417.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15417.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15417);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15417);
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