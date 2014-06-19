// Compiled by ClojureScript 0.0-2227
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
var opt_wrapper_29008 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_29009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_29010 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29010,opt_wrapper_29008,table_section_wrapper_29009,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_29008,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_29009,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29009,cell_wrapper_29010,table_section_wrapper_29009,table_section_wrapper_29009]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__29015 = cljs.core.seq.call(null,tbody);var chunk__29016 = null;var count__29017 = 0;var i__29018 = 0;while(true){
if((i__29018 < count__29017))
{var child = cljs.core._nth.call(null,chunk__29016,i__29018);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29019 = seq__29015;
var G__29020 = chunk__29016;
var G__29021 = count__29017;
var G__29022 = (i__29018 + 1);
seq__29015 = G__29019;
chunk__29016 = G__29020;
count__29017 = G__29021;
i__29018 = G__29022;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29015);if(temp__4126__auto__)
{var seq__29015__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29015__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__29015__$1);{
var G__29023 = cljs.core.chunk_rest.call(null,seq__29015__$1);
var G__29024 = c__4295__auto__;
var G__29025 = cljs.core.count.call(null,c__4295__auto__);
var G__29026 = 0;
seq__29015 = G__29023;
chunk__29016 = G__29024;
count__29017 = G__29025;
i__29018 = G__29026;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__29015__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29027 = cljs.core.next.call(null,seq__29015__$1);
var G__29028 = null;
var G__29029 = 0;
var G__29030 = 0;
seq__29015 = G__29027;
chunk__29016 = G__29028;
count__29017 = G__29029;
i__29018 = G__29030;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__29032 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__29032,0,null);var start_wrap = cljs.core.nth.call(null,vec__29032,1,null);var end_wrap = cljs.core.nth.call(null,vec__29032,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__29033 = wrapper.lastChild;
var G__29034 = (level - 1);
wrapper = G__29033;
level = G__29034;
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
if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3527__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3527__auto__;
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
domina.DomContent = (function (){var obj29036 = {};return obj29036;
})();
domina.nodes = (function nodes(content){if((function (){var and__3527__auto__ = content;if(and__3527__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3527__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4166__auto__ = (((content == null))?null:content);return (function (){var or__3539__auto__ = (domina.nodes[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.nodes["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3527__auto__ = nodeseq;if(and__3527__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3527__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4166__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3539__auto__ = (domina.single_node[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.single_node["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3527__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3527__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3527__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__29037){
var mesg = cljs.core.seq(arglist__29037);
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
log.cljs$lang$applyTo = (function (arglist__29038){
var mesg = cljs.core.seq(arglist__29038);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__29039){
var contents = cljs.core.seq(arglist__29039);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__29040_SHARP_){return p1__29040_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__29041_SHARP_,p2__29042_SHARP_){return goog.dom.insertChildAt(p1__29041_SHARP_,p2__29042_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29044_SHARP_,p2__29043_SHARP_){return goog.dom.insertSiblingBefore(p2__29043_SHARP_,p1__29044_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29046_SHARP_,p2__29045_SHARP_){return goog.dom.insertSiblingAfter(p2__29045_SHARP_,p1__29046_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__29048_SHARP_,p2__29047_SHARP_){return goog.dom.replaceNode(p2__29047_SHARP_,p1__29048_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__29053_29057 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29054_29058 = null;var count__29055_29059 = 0;var i__29056_29060 = 0;while(true){
if((i__29056_29060 < count__29055_29059))
{var n_29061 = cljs.core._nth.call(null,chunk__29054_29058,i__29056_29060);goog.style.setStyle(n_29061,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29062 = seq__29053_29057;
var G__29063 = chunk__29054_29058;
var G__29064 = count__29055_29059;
var G__29065 = (i__29056_29060 + 1);
seq__29053_29057 = G__29062;
chunk__29054_29058 = G__29063;
count__29055_29059 = G__29064;
i__29056_29060 = G__29065;
continue;
}
} else
{var temp__4126__auto___29066 = cljs.core.seq.call(null,seq__29053_29057);if(temp__4126__auto___29066)
{var seq__29053_29067__$1 = temp__4126__auto___29066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29053_29067__$1))
{var c__4295__auto___29068 = cljs.core.chunk_first.call(null,seq__29053_29067__$1);{
var G__29069 = cljs.core.chunk_rest.call(null,seq__29053_29067__$1);
var G__29070 = c__4295__auto___29068;
var G__29071 = cljs.core.count.call(null,c__4295__auto___29068);
var G__29072 = 0;
seq__29053_29057 = G__29069;
chunk__29054_29058 = G__29070;
count__29055_29059 = G__29071;
i__29056_29060 = G__29072;
continue;
}
} else
{var n_29073 = cljs.core.first.call(null,seq__29053_29067__$1);goog.style.setStyle(n_29073,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29074 = cljs.core.next.call(null,seq__29053_29067__$1);
var G__29075 = null;
var G__29076 = 0;
var G__29077 = 0;
seq__29053_29057 = G__29074;
chunk__29054_29058 = G__29075;
count__29055_29059 = G__29076;
i__29056_29060 = G__29077;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29078){
var content = cljs.core.first(arglist__29078);
arglist__29078 = cljs.core.next(arglist__29078);
var name = cljs.core.first(arglist__29078);
var value = cljs.core.rest(arglist__29078);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__29083_29087 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29084_29088 = null;var count__29085_29089 = 0;var i__29086_29090 = 0;while(true){
if((i__29086_29090 < count__29085_29089))
{var n_29091 = cljs.core._nth.call(null,chunk__29084_29088,i__29086_29090);n_29091.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29092 = seq__29083_29087;
var G__29093 = chunk__29084_29088;
var G__29094 = count__29085_29089;
var G__29095 = (i__29086_29090 + 1);
seq__29083_29087 = G__29092;
chunk__29084_29088 = G__29093;
count__29085_29089 = G__29094;
i__29086_29090 = G__29095;
continue;
}
} else
{var temp__4126__auto___29096 = cljs.core.seq.call(null,seq__29083_29087);if(temp__4126__auto___29096)
{var seq__29083_29097__$1 = temp__4126__auto___29096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29083_29097__$1))
{var c__4295__auto___29098 = cljs.core.chunk_first.call(null,seq__29083_29097__$1);{
var G__29099 = cljs.core.chunk_rest.call(null,seq__29083_29097__$1);
var G__29100 = c__4295__auto___29098;
var G__29101 = cljs.core.count.call(null,c__4295__auto___29098);
var G__29102 = 0;
seq__29083_29087 = G__29099;
chunk__29084_29088 = G__29100;
count__29085_29089 = G__29101;
i__29086_29090 = G__29102;
continue;
}
} else
{var n_29103 = cljs.core.first.call(null,seq__29083_29097__$1);n_29103.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29104 = cljs.core.next.call(null,seq__29083_29097__$1);
var G__29105 = null;
var G__29106 = 0;
var G__29107 = 0;
seq__29083_29087 = G__29104;
chunk__29084_29088 = G__29105;
count__29085_29089 = G__29106;
i__29086_29090 = G__29107;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__29108){
var content = cljs.core.first(arglist__29108);
arglist__29108 = cljs.core.next(arglist__29108);
var name = cljs.core.first(arglist__29108);
var value = cljs.core.rest(arglist__29108);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__29113_29117 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29114_29118 = null;var count__29115_29119 = 0;var i__29116_29120 = 0;while(true){
if((i__29116_29120 < count__29115_29119))
{var n_29121 = cljs.core._nth.call(null,chunk__29114_29118,i__29116_29120);n_29121.removeAttribute(cljs.core.name.call(null,name));
{
var G__29122 = seq__29113_29117;
var G__29123 = chunk__29114_29118;
var G__29124 = count__29115_29119;
var G__29125 = (i__29116_29120 + 1);
seq__29113_29117 = G__29122;
chunk__29114_29118 = G__29123;
count__29115_29119 = G__29124;
i__29116_29120 = G__29125;
continue;
}
} else
{var temp__4126__auto___29126 = cljs.core.seq.call(null,seq__29113_29117);if(temp__4126__auto___29126)
{var seq__29113_29127__$1 = temp__4126__auto___29126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29113_29127__$1))
{var c__4295__auto___29128 = cljs.core.chunk_first.call(null,seq__29113_29127__$1);{
var G__29129 = cljs.core.chunk_rest.call(null,seq__29113_29127__$1);
var G__29130 = c__4295__auto___29128;
var G__29131 = cljs.core.count.call(null,c__4295__auto___29128);
var G__29132 = 0;
seq__29113_29117 = G__29129;
chunk__29114_29118 = G__29130;
count__29115_29119 = G__29131;
i__29116_29120 = G__29132;
continue;
}
} else
{var n_29133 = cljs.core.first.call(null,seq__29113_29127__$1);n_29133.removeAttribute(cljs.core.name.call(null,name));
{
var G__29134 = cljs.core.next.call(null,seq__29113_29127__$1);
var G__29135 = null;
var G__29136 = 0;
var G__29137 = 0;
seq__29113_29117 = G__29134;
chunk__29114_29118 = G__29135;
count__29115_29119 = G__29136;
i__29116_29120 = G__29137;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__29139 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__29139,0,null);var v = cljs.core.nth.call(null,vec__29139,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
{return v;
} else
{return and__3527__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__29140_SHARP_){var attr = attrs__$1.item(p1__29140_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__29147_29153 = cljs.core.seq.call(null,styles);var chunk__29148_29154 = null;var count__29149_29155 = 0;var i__29150_29156 = 0;while(true){
if((i__29150_29156 < count__29149_29155))
{var vec__29151_29157 = cljs.core._nth.call(null,chunk__29148_29154,i__29150_29156);var name_29158 = cljs.core.nth.call(null,vec__29151_29157,0,null);var value_29159 = cljs.core.nth.call(null,vec__29151_29157,1,null);domina.set_style_BANG_.call(null,content,name_29158,value_29159);
{
var G__29160 = seq__29147_29153;
var G__29161 = chunk__29148_29154;
var G__29162 = count__29149_29155;
var G__29163 = (i__29150_29156 + 1);
seq__29147_29153 = G__29160;
chunk__29148_29154 = G__29161;
count__29149_29155 = G__29162;
i__29150_29156 = G__29163;
continue;
}
} else
{var temp__4126__auto___29164 = cljs.core.seq.call(null,seq__29147_29153);if(temp__4126__auto___29164)
{var seq__29147_29165__$1 = temp__4126__auto___29164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29147_29165__$1))
{var c__4295__auto___29166 = cljs.core.chunk_first.call(null,seq__29147_29165__$1);{
var G__29167 = cljs.core.chunk_rest.call(null,seq__29147_29165__$1);
var G__29168 = c__4295__auto___29166;
var G__29169 = cljs.core.count.call(null,c__4295__auto___29166);
var G__29170 = 0;
seq__29147_29153 = G__29167;
chunk__29148_29154 = G__29168;
count__29149_29155 = G__29169;
i__29150_29156 = G__29170;
continue;
}
} else
{var vec__29152_29171 = cljs.core.first.call(null,seq__29147_29165__$1);var name_29172 = cljs.core.nth.call(null,vec__29152_29171,0,null);var value_29173 = cljs.core.nth.call(null,vec__29152_29171,1,null);domina.set_style_BANG_.call(null,content,name_29172,value_29173);
{
var G__29174 = cljs.core.next.call(null,seq__29147_29165__$1);
var G__29175 = null;
var G__29176 = 0;
var G__29177 = 0;
seq__29147_29153 = G__29174;
chunk__29148_29154 = G__29175;
count__29149_29155 = G__29176;
i__29150_29156 = G__29177;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__29184_29190 = cljs.core.seq.call(null,attrs);var chunk__29185_29191 = null;var count__29186_29192 = 0;var i__29187_29193 = 0;while(true){
if((i__29187_29193 < count__29186_29192))
{var vec__29188_29194 = cljs.core._nth.call(null,chunk__29185_29191,i__29187_29193);var name_29195 = cljs.core.nth.call(null,vec__29188_29194,0,null);var value_29196 = cljs.core.nth.call(null,vec__29188_29194,1,null);domina.set_attr_BANG_.call(null,content,name_29195,value_29196);
{
var G__29197 = seq__29184_29190;
var G__29198 = chunk__29185_29191;
var G__29199 = count__29186_29192;
var G__29200 = (i__29187_29193 + 1);
seq__29184_29190 = G__29197;
chunk__29185_29191 = G__29198;
count__29186_29192 = G__29199;
i__29187_29193 = G__29200;
continue;
}
} else
{var temp__4126__auto___29201 = cljs.core.seq.call(null,seq__29184_29190);if(temp__4126__auto___29201)
{var seq__29184_29202__$1 = temp__4126__auto___29201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29184_29202__$1))
{var c__4295__auto___29203 = cljs.core.chunk_first.call(null,seq__29184_29202__$1);{
var G__29204 = cljs.core.chunk_rest.call(null,seq__29184_29202__$1);
var G__29205 = c__4295__auto___29203;
var G__29206 = cljs.core.count.call(null,c__4295__auto___29203);
var G__29207 = 0;
seq__29184_29190 = G__29204;
chunk__29185_29191 = G__29205;
count__29186_29192 = G__29206;
i__29187_29193 = G__29207;
continue;
}
} else
{var vec__29189_29208 = cljs.core.first.call(null,seq__29184_29202__$1);var name_29209 = cljs.core.nth.call(null,vec__29189_29208,0,null);var value_29210 = cljs.core.nth.call(null,vec__29189_29208,1,null);domina.set_attr_BANG_.call(null,content,name_29209,value_29210);
{
var G__29211 = cljs.core.next.call(null,seq__29184_29202__$1);
var G__29212 = null;
var G__29213 = 0;
var G__29214 = 0;
seq__29184_29190 = G__29211;
chunk__29185_29191 = G__29212;
count__29186_29192 = G__29213;
i__29187_29193 = G__29214;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__29219_29223 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29220_29224 = null;var count__29221_29225 = 0;var i__29222_29226 = 0;while(true){
if((i__29222_29226 < count__29221_29225))
{var node_29227 = cljs.core._nth.call(null,chunk__29220_29224,i__29222_29226);goog.dom.classes.add(node_29227,class$);
{
var G__29228 = seq__29219_29223;
var G__29229 = chunk__29220_29224;
var G__29230 = count__29221_29225;
var G__29231 = (i__29222_29226 + 1);
seq__29219_29223 = G__29228;
chunk__29220_29224 = G__29229;
count__29221_29225 = G__29230;
i__29222_29226 = G__29231;
continue;
}
} else
{var temp__4126__auto___29232 = cljs.core.seq.call(null,seq__29219_29223);if(temp__4126__auto___29232)
{var seq__29219_29233__$1 = temp__4126__auto___29232;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29219_29233__$1))
{var c__4295__auto___29234 = cljs.core.chunk_first.call(null,seq__29219_29233__$1);{
var G__29235 = cljs.core.chunk_rest.call(null,seq__29219_29233__$1);
var G__29236 = c__4295__auto___29234;
var G__29237 = cljs.core.count.call(null,c__4295__auto___29234);
var G__29238 = 0;
seq__29219_29223 = G__29235;
chunk__29220_29224 = G__29236;
count__29221_29225 = G__29237;
i__29222_29226 = G__29238;
continue;
}
} else
{var node_29239 = cljs.core.first.call(null,seq__29219_29233__$1);goog.dom.classes.add(node_29239,class$);
{
var G__29240 = cljs.core.next.call(null,seq__29219_29233__$1);
var G__29241 = null;
var G__29242 = 0;
var G__29243 = 0;
seq__29219_29223 = G__29240;
chunk__29220_29224 = G__29241;
count__29221_29225 = G__29242;
i__29222_29226 = G__29243;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__29248_29252 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29249_29253 = null;var count__29250_29254 = 0;var i__29251_29255 = 0;while(true){
if((i__29251_29255 < count__29250_29254))
{var node_29256 = cljs.core._nth.call(null,chunk__29249_29253,i__29251_29255);goog.dom.classes.remove(node_29256,class$);
{
var G__29257 = seq__29248_29252;
var G__29258 = chunk__29249_29253;
var G__29259 = count__29250_29254;
var G__29260 = (i__29251_29255 + 1);
seq__29248_29252 = G__29257;
chunk__29249_29253 = G__29258;
count__29250_29254 = G__29259;
i__29251_29255 = G__29260;
continue;
}
} else
{var temp__4126__auto___29261 = cljs.core.seq.call(null,seq__29248_29252);if(temp__4126__auto___29261)
{var seq__29248_29262__$1 = temp__4126__auto___29261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29248_29262__$1))
{var c__4295__auto___29263 = cljs.core.chunk_first.call(null,seq__29248_29262__$1);{
var G__29264 = cljs.core.chunk_rest.call(null,seq__29248_29262__$1);
var G__29265 = c__4295__auto___29263;
var G__29266 = cljs.core.count.call(null,c__4295__auto___29263);
var G__29267 = 0;
seq__29248_29252 = G__29264;
chunk__29249_29253 = G__29265;
count__29250_29254 = G__29266;
i__29251_29255 = G__29267;
continue;
}
} else
{var node_29268 = cljs.core.first.call(null,seq__29248_29262__$1);goog.dom.classes.remove(node_29268,class$);
{
var G__29269 = cljs.core.next.call(null,seq__29248_29262__$1);
var G__29270 = null;
var G__29271 = 0;
var G__29272 = 0;
seq__29248_29252 = G__29269;
chunk__29249_29253 = G__29270;
count__29250_29254 = G__29271;
i__29251_29255 = G__29272;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__29277_29281 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29278_29282 = null;var count__29279_29283 = 0;var i__29280_29284 = 0;while(true){
if((i__29280_29284 < count__29279_29283))
{var node_29285 = cljs.core._nth.call(null,chunk__29278_29282,i__29280_29284);goog.dom.classes.toggle(node_29285,class$);
{
var G__29286 = seq__29277_29281;
var G__29287 = chunk__29278_29282;
var G__29288 = count__29279_29283;
var G__29289 = (i__29280_29284 + 1);
seq__29277_29281 = G__29286;
chunk__29278_29282 = G__29287;
count__29279_29283 = G__29288;
i__29280_29284 = G__29289;
continue;
}
} else
{var temp__4126__auto___29290 = cljs.core.seq.call(null,seq__29277_29281);if(temp__4126__auto___29290)
{var seq__29277_29291__$1 = temp__4126__auto___29290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29277_29291__$1))
{var c__4295__auto___29292 = cljs.core.chunk_first.call(null,seq__29277_29291__$1);{
var G__29293 = cljs.core.chunk_rest.call(null,seq__29277_29291__$1);
var G__29294 = c__4295__auto___29292;
var G__29295 = cljs.core.count.call(null,c__4295__auto___29292);
var G__29296 = 0;
seq__29277_29281 = G__29293;
chunk__29278_29282 = G__29294;
count__29279_29283 = G__29295;
i__29280_29284 = G__29296;
continue;
}
} else
{var node_29297 = cljs.core.first.call(null,seq__29277_29291__$1);goog.dom.classes.toggle(node_29297,class$);
{
var G__29298 = cljs.core.next.call(null,seq__29277_29291__$1);
var G__29299 = null;
var G__29300 = 0;
var G__29301 = 0;
seq__29277_29281 = G__29298;
chunk__29278_29282 = G__29299;
count__29279_29283 = G__29300;
i__29280_29284 = G__29301;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_29310__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__29306_29311 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29307_29312 = null;var count__29308_29313 = 0;var i__29309_29314 = 0;while(true){
if((i__29309_29314 < count__29308_29313))
{var node_29315 = cljs.core._nth.call(null,chunk__29307_29312,i__29309_29314);goog.dom.classes.set(node_29315,classes_29310__$1);
{
var G__29316 = seq__29306_29311;
var G__29317 = chunk__29307_29312;
var G__29318 = count__29308_29313;
var G__29319 = (i__29309_29314 + 1);
seq__29306_29311 = G__29316;
chunk__29307_29312 = G__29317;
count__29308_29313 = G__29318;
i__29309_29314 = G__29319;
continue;
}
} else
{var temp__4126__auto___29320 = cljs.core.seq.call(null,seq__29306_29311);if(temp__4126__auto___29320)
{var seq__29306_29321__$1 = temp__4126__auto___29320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29306_29321__$1))
{var c__4295__auto___29322 = cljs.core.chunk_first.call(null,seq__29306_29321__$1);{
var G__29323 = cljs.core.chunk_rest.call(null,seq__29306_29321__$1);
var G__29324 = c__4295__auto___29322;
var G__29325 = cljs.core.count.call(null,c__4295__auto___29322);
var G__29326 = 0;
seq__29306_29311 = G__29323;
chunk__29307_29312 = G__29324;
count__29308_29313 = G__29325;
i__29309_29314 = G__29326;
continue;
}
} else
{var node_29327 = cljs.core.first.call(null,seq__29306_29321__$1);goog.dom.classes.set(node_29327,classes_29310__$1);
{
var G__29328 = cljs.core.next.call(null,seq__29306_29321__$1);
var G__29329 = null;
var G__29330 = 0;
var G__29331 = 0;
seq__29306_29311 = G__29328;
chunk__29307_29312 = G__29329;
count__29308_29313 = G__29330;
i__29309_29314 = G__29331;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__29336_29340 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29337_29341 = null;var count__29338_29342 = 0;var i__29339_29343 = 0;while(true){
if((i__29339_29343 < count__29338_29342))
{var node_29344 = cljs.core._nth.call(null,chunk__29337_29341,i__29339_29343);goog.dom.setTextContent(node_29344,value);
{
var G__29345 = seq__29336_29340;
var G__29346 = chunk__29337_29341;
var G__29347 = count__29338_29342;
var G__29348 = (i__29339_29343 + 1);
seq__29336_29340 = G__29345;
chunk__29337_29341 = G__29346;
count__29338_29342 = G__29347;
i__29339_29343 = G__29348;
continue;
}
} else
{var temp__4126__auto___29349 = cljs.core.seq.call(null,seq__29336_29340);if(temp__4126__auto___29349)
{var seq__29336_29350__$1 = temp__4126__auto___29349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29336_29350__$1))
{var c__4295__auto___29351 = cljs.core.chunk_first.call(null,seq__29336_29350__$1);{
var G__29352 = cljs.core.chunk_rest.call(null,seq__29336_29350__$1);
var G__29353 = c__4295__auto___29351;
var G__29354 = cljs.core.count.call(null,c__4295__auto___29351);
var G__29355 = 0;
seq__29336_29340 = G__29352;
chunk__29337_29341 = G__29353;
count__29338_29342 = G__29354;
i__29339_29343 = G__29355;
continue;
}
} else
{var node_29356 = cljs.core.first.call(null,seq__29336_29350__$1);goog.dom.setTextContent(node_29356,value);
{
var G__29357 = cljs.core.next.call(null,seq__29336_29350__$1);
var G__29358 = null;
var G__29359 = 0;
var G__29360 = 0;
seq__29336_29340 = G__29357;
chunk__29337_29341 = G__29358;
count__29338_29342 = G__29359;
i__29339_29343 = G__29360;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__29365_29369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29366_29370 = null;var count__29367_29371 = 0;var i__29368_29372 = 0;while(true){
if((i__29368_29372 < count__29367_29371))
{var node_29373 = cljs.core._nth.call(null,chunk__29366_29370,i__29368_29372);goog.dom.forms.setValue(node_29373,value);
{
var G__29374 = seq__29365_29369;
var G__29375 = chunk__29366_29370;
var G__29376 = count__29367_29371;
var G__29377 = (i__29368_29372 + 1);
seq__29365_29369 = G__29374;
chunk__29366_29370 = G__29375;
count__29367_29371 = G__29376;
i__29368_29372 = G__29377;
continue;
}
} else
{var temp__4126__auto___29378 = cljs.core.seq.call(null,seq__29365_29369);if(temp__4126__auto___29378)
{var seq__29365_29379__$1 = temp__4126__auto___29378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29365_29379__$1))
{var c__4295__auto___29380 = cljs.core.chunk_first.call(null,seq__29365_29379__$1);{
var G__29381 = cljs.core.chunk_rest.call(null,seq__29365_29379__$1);
var G__29382 = c__4295__auto___29380;
var G__29383 = cljs.core.count.call(null,c__4295__auto___29380);
var G__29384 = 0;
seq__29365_29369 = G__29381;
chunk__29366_29370 = G__29382;
count__29367_29371 = G__29383;
i__29368_29372 = G__29384;
continue;
}
} else
{var node_29385 = cljs.core.first.call(null,seq__29365_29379__$1);goog.dom.forms.setValue(node_29385,value);
{
var G__29386 = cljs.core.next.call(null,seq__29365_29379__$1);
var G__29387 = null;
var G__29388 = 0;
var G__29389 = 0;
seq__29365_29369 = G__29386;
chunk__29366_29370 = G__29387;
count__29367_29371 = G__29388;
i__29368_29372 = G__29389;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3527__auto__ = allows_inner_html_QMARK_;if(and__3527__auto__)
{var and__3527__auto____$1 = (function (){var or__3539__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3527__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var value_29400 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__29396_29401 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29397_29402 = null;var count__29398_29403 = 0;var i__29399_29404 = 0;while(true){
if((i__29399_29404 < count__29398_29403))
{var node_29405 = cljs.core._nth.call(null,chunk__29397_29402,i__29399_29404);node_29405.innerHTML = value_29400;
{
var G__29406 = seq__29396_29401;
var G__29407 = chunk__29397_29402;
var G__29408 = count__29398_29403;
var G__29409 = (i__29399_29404 + 1);
seq__29396_29401 = G__29406;
chunk__29397_29402 = G__29407;
count__29398_29403 = G__29408;
i__29399_29404 = G__29409;
continue;
}
} else
{var temp__4126__auto___29410 = cljs.core.seq.call(null,seq__29396_29401);if(temp__4126__auto___29410)
{var seq__29396_29411__$1 = temp__4126__auto___29410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29396_29411__$1))
{var c__4295__auto___29412 = cljs.core.chunk_first.call(null,seq__29396_29411__$1);{
var G__29413 = cljs.core.chunk_rest.call(null,seq__29396_29411__$1);
var G__29414 = c__4295__auto___29412;
var G__29415 = cljs.core.count.call(null,c__4295__auto___29412);
var G__29416 = 0;
seq__29396_29401 = G__29413;
chunk__29397_29402 = G__29414;
count__29398_29403 = G__29415;
i__29399_29404 = G__29416;
continue;
}
} else
{var node_29417 = cljs.core.first.call(null,seq__29396_29411__$1);node_29417.innerHTML = value_29400;
{
var G__29418 = cljs.core.next.call(null,seq__29396_29411__$1);
var G__29419 = null;
var G__29420 = 0;
var G__29421 = 0;
seq__29396_29401 = G__29418;
chunk__29397_29402 = G__29419;
count__29398_29403 = G__29420;
i__29399_29404 = G__29421;
continue;
}
}
} else
{}
}
break;
}
}catch (e29395){if((e29395 instanceof Error))
{var e_29422 = e29395;domina.replace_children_BANG_.call(null,content,value_29400);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29395;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3527__auto__ = bubble;if(cljs.core.truth_(and__3527__auto__))
{return (value == null);
} else
{return and__3527__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3539__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__29429_29433 = cljs.core.seq.call(null,children);var chunk__29430_29434 = null;var count__29431_29435 = 0;var i__29432_29436 = 0;while(true){
if((i__29432_29436 < count__29431_29435))
{var child_29437 = cljs.core._nth.call(null,chunk__29430_29434,i__29432_29436);frag.appendChild(child_29437);
{
var G__29438 = seq__29429_29433;
var G__29439 = chunk__29430_29434;
var G__29440 = count__29431_29435;
var G__29441 = (i__29432_29436 + 1);
seq__29429_29433 = G__29438;
chunk__29430_29434 = G__29439;
count__29431_29435 = G__29440;
i__29432_29436 = G__29441;
continue;
}
} else
{var temp__4126__auto___29442 = cljs.core.seq.call(null,seq__29429_29433);if(temp__4126__auto___29442)
{var seq__29429_29443__$1 = temp__4126__auto___29442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29429_29443__$1))
{var c__4295__auto___29444 = cljs.core.chunk_first.call(null,seq__29429_29443__$1);{
var G__29445 = cljs.core.chunk_rest.call(null,seq__29429_29443__$1);
var G__29446 = c__4295__auto___29444;
var G__29447 = cljs.core.count.call(null,c__4295__auto___29444);
var G__29448 = 0;
seq__29429_29433 = G__29445;
chunk__29430_29434 = G__29446;
count__29431_29435 = G__29447;
i__29432_29436 = G__29448;
continue;
}
} else
{var child_29449 = cljs.core.first.call(null,seq__29429_29443__$1);frag.appendChild(child_29449);
{
var G__29450 = cljs.core.next.call(null,seq__29429_29443__$1);
var G__29451 = null;
var G__29452 = 0;
var G__29453 = 0;
seq__29429_29433 = G__29450;
chunk__29430_29434 = G__29451;
count__29431_29435 = G__29452;
i__29432_29436 = G__29453;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__29423_SHARP_,p2__29424_SHARP_){return f.call(null,p1__29423_SHARP_,p2__29424_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3527__auto__ = obj;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3527__auto____$1)
{return obj.length;
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
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
{if((function (){var G__29455 = list_thing;if(G__29455)
{var bit__4189__auto__ = (G__29455.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__29455.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29455.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29455);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29455);
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
{if((function (){var G__29456 = content;if(G__29456)
{var bit__4189__auto__ = (G__29456.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__29456.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29456.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29456);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29456);
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
{if((function (){var G__29457 = content;if(G__29457)
{var bit__4189__auto__ = (G__29457.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__29457.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29457.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29457);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29457);
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